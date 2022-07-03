import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import * as ClassicEditorBuild from '@ckeditor/ckeditor5-build-classic';
import { NbWindowService } from '@nebular/theme';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'app-title-cell-editor',
  templateUrl: './title-cell-editor.component.html',
  styleUrls: ['./title-cell-editor.component.scss']
})
export class TitleCellEditorComponent extends DefaultEditor implements OnInit {
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any> | any;
  editorText = '';
  public editor = ClassicEditorBuild;

  constructor(
    private windowService: NbWindowService
  ) {
    super();
  }

  ngOnInit(): void {
    this.editorText = this.cell.getValue();
  }

  public onReady(editor: any) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  openWindow() {
    const windowRef = this.windowService.open(this.contentTemplate,
      { title: 'Enter your text' });

    windowRef.onClose.subscribe(() => {
      this.updateValue(this.getPlainText(this.editorText));
    });
  }

  updateValue(value: any) {
    this.cell.setValue(value);
  }

  getPlainText(strSrc = '') {
    var resultStr = "";

    // Ignore the <p> tag if it is in very start of the text
    if (strSrc.indexOf('<p>') == 0)
      resultStr = strSrc.substring(3);
    else
      resultStr = strSrc;
    // Replace <p> with two newlines
    resultStr = resultStr.replace(/<p>/gi, "\r\n\r\n");
    resultStr = resultStr.replace(/&nbsp;/gi, "\r\n\r\n");
    // Replace <br /> with one newline
    resultStr = resultStr.replace(/<br \/>/gi, "\r\n");
    resultStr = resultStr.replace(/<br>/gi, "\r\n");

    //-+-+-+-+-+-+-+-+-+-+-+
    // Strip off other HTML tags.
    //-+-+-+-+-+-+-+-+-+-+-+

    return resultStr.replace(/<\/?[^>]+(>|$)/g, "");
  }
}

