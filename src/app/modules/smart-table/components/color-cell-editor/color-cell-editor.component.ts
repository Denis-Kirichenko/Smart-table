import { Component, OnInit } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table';

@Component({
  selector: 'app-color-cell-editor',
  templateUrl: './color-cell-editor.component.html',
  styleUrls: ['./color-cell-editor.component.scss']
})
export class ColorCellEditorComponent extends DefaultEditor implements OnInit {
  colorValue: string = '';
  constructor() {
    super();

  }

  ngOnInit() {
    if (this.cell.getValue()) {
      this.colorValue = this.cell.getValue();
    }
  }

  updateValue(value: any) {
    this.cell.setValue(value);
  }


}
