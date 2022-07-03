import { AttachmentCellRendererComponent } from './../attachment-cell-renderer/attachment-cell-renderer.component';
import { AttachmentCellEditorComponent } from './../attachment-cell-editor/attachment-cell-editor.component';
import { Component, OnInit } from '@angular/core';
import { ColorCellRendererComponent } from '../color-cell-renderer/color-cell-renderer.component';
import { ColorCellEditorComponent } from '../color-cell-editor/color-cell-editor.component';
import { TitleCellEditorComponent } from '../title-cell-editor/title-cell-editor.component';

@Component({
  selector: 'app-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss']
})
export class SmartTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    columns: {
      title: {
        title: 'Title',
        type: 'text',
        editor: {
          type: 'custom',
          component: TitleCellEditorComponent,
        },
      },
      color: {
        title: 'Color',
        type: 'custom',
        renderComponent: ColorCellRendererComponent,
        editor: {
          type: 'custom',
          component: ColorCellEditorComponent,
        },
      },
      attachments: {
        title: 'Attachments',
        type: 'custom',
        renderComponent: AttachmentCellRendererComponent,
        editor: {
          type: 'custom',
          component: AttachmentCellEditorComponent,
        },
      },
    },
  };
}
