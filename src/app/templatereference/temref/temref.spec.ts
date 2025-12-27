import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Temref } from './temref';

describe('Temref', () => {
  let component: Temref;
  let fixture: ComponentFixture<Temref>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Temref]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Temref);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
