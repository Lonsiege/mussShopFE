import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusshopHomeComponent } from './musshop-home.component';

describe('MusshopHomeComponent', () => {
  let component: MusshopHomeComponent;
  let fixture: ComponentFixture<MusshopHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusshopHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusshopHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
