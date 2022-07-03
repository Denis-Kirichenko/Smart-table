import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCellEditorComponent } from './color-cell-editor.component';

describe('ColorCellEditorComponent', () => {
  let component: ColorCellEditorComponent;
  let fixture: ComponentFixture<ColorCellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCellEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
