import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifeCycle } from './parent-life-cycle';

describe('ParentLifeCycle', () => {
  let component: ParentLifeCycle;
  let fixture: ComponentFixture<ParentLifeCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentLifeCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLifeCycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
