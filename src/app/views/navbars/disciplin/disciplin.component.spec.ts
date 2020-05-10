import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinComponent } from './disciplin.component';

describe('DisciplinComponent', () => {
  let component: DisciplinComponent;
  let fixture: ComponentFixture<DisciplinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
