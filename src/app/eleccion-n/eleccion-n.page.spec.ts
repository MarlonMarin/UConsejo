import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleccionNPage } from './eleccion-n.page';

describe('EleccionNPage', () => {
  let component: EleccionNPage;
  let fixture: ComponentFixture<EleccionNPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleccionNPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleccionNPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
