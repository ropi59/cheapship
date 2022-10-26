import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvVariableComponent } from './env-variable.component';

describe('EnvVariableComponent', () => {
  let component: EnvVariableComponent;
  let fixture: ComponentFixture<EnvVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvVariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
