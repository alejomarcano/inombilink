import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesvendidosComponent } from './inmueblesvendidos.component';

describe('InmueblesvendidosComponent', () => {
  let component: InmueblesvendidosComponent;
  let fixture: ComponentFixture<InmueblesvendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmueblesvendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmueblesvendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
