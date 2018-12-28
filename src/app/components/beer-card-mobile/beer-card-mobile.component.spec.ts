import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCardMobileComponent } from './beer-card-mobile.component';

describe('BeerCardMobileComponent', () => {
  let component: BeerCardMobileComponent;
  let fixture: ComponentFixture<BeerCardMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCardMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
