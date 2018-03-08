import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusshopItemsComponent } from './musshop-items.component';

describe('MusshopItemsComponent', () => {
  let component: MusshopItemsComponent;
  let fixture: ComponentFixture<MusshopItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusshopItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusshopItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
