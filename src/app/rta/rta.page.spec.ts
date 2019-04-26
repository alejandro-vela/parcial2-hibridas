import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtaPage } from './rta.page';

describe('RtaPage', () => {
  let component: RtaPage;
  let fixture: ComponentFixture<RtaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
