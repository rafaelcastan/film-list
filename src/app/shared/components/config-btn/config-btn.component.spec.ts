import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigBtnComponent } from './config-btn.component';

describe('ConfigBtnComponent', () => {
  let component: ConfigBtnComponent;
  let fixture: ComponentFixture<ConfigBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
