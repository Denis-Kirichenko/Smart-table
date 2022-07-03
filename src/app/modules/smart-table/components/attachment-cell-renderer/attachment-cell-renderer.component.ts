import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-attachment-cell-renderer',
  templateUrl: './attachment-cell-renderer.component.html',
  styleUrls: ['./attachment-cell-renderer.component.scss']
})
export class AttachmentCellRendererComponent implements ViewCell, OnInit {

  attachList: any[] = [];

  @Input() value: any;
  @Input() rowData: any;

  ngOnInit() {
    this.attachList = this.value;
  }

}
