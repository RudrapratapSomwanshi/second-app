import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubhamComponent } from './shubham.component';

describe('ShubhamComponent', () => {
  let component: ShubhamComponent;
  let fixture: ComponentFixture<ShubhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShubhamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShubhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
