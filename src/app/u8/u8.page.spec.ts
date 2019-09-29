import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U8Page } from './u8.page';

describe('U8Page', () => {
  let component: U8Page;
  let fixture: ComponentFixture<U8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U8Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
