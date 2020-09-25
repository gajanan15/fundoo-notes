import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorpaletteComponent } from './colorpalette.component';

describe('ColorpaletteComponent', () => {
  let component: ColorpaletteComponent;
  let fixture: ComponentFixture<ColorpaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorpaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorpaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
