import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-color-cell-renderer',
  templateUrl: './color-cell-renderer.component.html',
  styleUrls: ['./color-cell-renderer.component.scss']
})
export class ColorCellRendererComponent implements ViewCell, OnInit {

  constructor() { }

  renderValue: string | undefined;

  @Input() value: any;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

}
