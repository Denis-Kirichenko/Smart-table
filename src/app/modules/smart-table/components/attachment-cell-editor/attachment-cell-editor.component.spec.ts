import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentCellEditorComponent } from './attachment-cell-editor.component';

describe('AttachmentCellEditorComponent', () => {
  let component: AttachmentCellEditorComponent;
  let fixture: ComponentFixture<AttachmentCellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmentCellEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
