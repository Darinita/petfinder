import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaPerrosComponent } from './adopta-perros.component';

describe('AdoptaPerrosComponent', () => {
  let component: AdoptaPerrosComponent;
  let fixture: ComponentFixture<AdoptaPerrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptaPerrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptaPerrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
