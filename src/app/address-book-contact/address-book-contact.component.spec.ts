import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBookContactComponent } from './address-book-contact.component';

describe('AddressBookContactComponent', () => {
  let component: AddressBookContactComponent;
  let fixture: ComponentFixture<AddressBookContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressBookContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressBookContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
