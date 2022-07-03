import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCellRendererComponent } from './color-cell-renderer.component';

describe('ColorCellRendererComponent', () => {
  let component: ColorCellRendererComponent;
  let fixture: ComponentFixture<ColorCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
