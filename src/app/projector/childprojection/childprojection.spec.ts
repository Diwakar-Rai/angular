import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childprojection } from './childprojection';

describe('Childprojection', () => {
  let component: Childprojection;
  let fixture: ComponentFixture<Childprojection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Childprojection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Childprojection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
