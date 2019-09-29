import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionPage } from './eleccion.page';

describe('EleccionPage', () => {
  let component: EleccionPage;
  let fixture: ComponentFixture<EleccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
