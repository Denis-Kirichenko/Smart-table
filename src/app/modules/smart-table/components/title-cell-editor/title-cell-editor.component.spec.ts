import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCellEditorComponent } from './title-cell-editor.component';

describe('TitleCellEditorComponent', () => {
  let component: TitleCellEditorComponent;
  let fixture: ComponentFixture<TitleCellEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCellEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleCellEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
