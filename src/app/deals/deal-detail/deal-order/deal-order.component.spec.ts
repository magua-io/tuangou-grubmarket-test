import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOrderComponent } from './deal-order.component';

describe('DealOrderComponent', () => {
  let component: DealOrderComponent;
  let fixture: ComponentFixture<DealOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
