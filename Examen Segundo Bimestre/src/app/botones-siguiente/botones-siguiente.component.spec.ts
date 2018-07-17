import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesSiguienteComponent } from './botones-siguiente.component';

describe('BotonesSiguienteComponent', () => {
  let component: BotonesSiguienteComponent;
  let fixture: ComponentFixture<BotonesSiguienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonesSiguienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesSiguienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
