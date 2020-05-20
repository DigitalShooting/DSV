import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscMiniComponent } from './dsc-mini.component';

describe('DscMiniComponent', () => {
  let component: DscMiniComponent;
  let fixture: ComponentFixture<DscMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
