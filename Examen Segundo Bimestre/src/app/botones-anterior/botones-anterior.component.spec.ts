import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesAnteriorComponent } from './botones-anterior.component';

describe('BotonesAnteriorComponent', () => {
  let component: BotonesAnteriorComponent;
  let fixture: ComponentFixture<BotonesAnteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesAnteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesAnteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
