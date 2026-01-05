import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projector } from './projector';

describe('Projector', () => {
  let component: Projector;
  let fixture: ComponentFixture<Projector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Projector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
