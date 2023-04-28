import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorialComponentComponent } from './factorial-component.component';

describe('FactorialComponentComponent', () => {
  let component: FactorialComponentComponent;
  let fixture: ComponentFixture<FactorialComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactorialComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactorialComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
