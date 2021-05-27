import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDeleteConfirmComponent } from './cart-delete-confirm.component';

describe('CartDeleteConfirmComponent', () => {
  let component: CartDeleteConfirmComponent;
  let fixture: ComponentFixture<CartDeleteConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDeleteConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDeleteConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
