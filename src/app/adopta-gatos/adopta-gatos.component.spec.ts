import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptaGatosComponent } from './adopta-gatos.component';

describe('AdoptaGatosComponent', () => {
  let component: AdoptaGatosComponent;
  let fixture: ComponentFixture<AdoptaGatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptaGatosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptaGatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
