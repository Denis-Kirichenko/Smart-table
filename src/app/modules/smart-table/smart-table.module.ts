import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartTableComponent } from './components/smart-table/smart-table.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ColorPickerModule } from 'ngx-color-picker';
import { AttachmentCellRendererComponent } from './components/attachment-cell-renderer/attachment-cell-renderer.component';
import { ColorCellRendererComponent } from './components/color-cell-renderer/color-cell-renderer.component';
import { AttachmentCellEditorComponent } from './components/attachment-cell-editor/attachment-cell-editor.component';
import { ColorCellEditorComponent } from './components/color-cell-editor/color-cell-editor.component';
import { FormsModule } from '@angular/forms';
import { TitleCellEditorComponent } from './components/title-cell-editor/title-cell-editor.component';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [
    SmartTableComponent,
    AttachmentCellRendererComponent,
    ColorCellRendererComponent,
    AttachmentCellEditorComponent,
    ColorCellEditorComponent,
    TitleCellEditorComponent,
  ],
  imports: [
    CommonModule,
    Ng2SmartTableModule,
    CKEditorModule,
    ColorPickerModule,
    FormsModule,
    NbLayoutModule
  ]
})
export class SmartTableModule { }
