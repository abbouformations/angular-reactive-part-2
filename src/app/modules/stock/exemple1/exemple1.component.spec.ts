import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exemple1Component } from './exemple1.component';

describe('Exemple1Component', () => {
  let component: Exemple1Component;
  let fixture: ComponentFixture<Exemple1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exemple1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Exemple1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
