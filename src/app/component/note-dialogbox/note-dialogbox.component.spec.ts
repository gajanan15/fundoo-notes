import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDialogboxComponent } from './note-dialogbox.component';

describe('NoteDialogboxComponent', () => {
  let component: NoteDialogboxComponent;
  let fixture: ComponentFixture<NoteDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
