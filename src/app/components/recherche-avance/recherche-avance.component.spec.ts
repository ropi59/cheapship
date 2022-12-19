import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheAvanceComponent } from './recherche-avance.component';

describe('RechercheAvanceComponent', () => {
  let component: RechercheAvanceComponent;
  let fixture: ComponentFixture<RechercheAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheAvanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
