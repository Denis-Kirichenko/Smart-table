import { AfterViewInit, Component } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'app-attachment-cell-editor',
  templateUrl: './attachment-cell-editor.component.html',
  styleUrls: ['./attachment-cell-editor.component.scss']
})
export class AttachmentCellEditorComponent extends DefaultEditor implements AfterViewInit {
  attachList: any;
  constructor(

  ) {
    super();
  }

  ngAfterViewInit() {
    if (this.cell.getValue()) {
      // this.attachList = this.cell.getValue();
    }
  }

  updateValue(e: any) {
    this.cell.setValue(e.target.files);
  }

}
