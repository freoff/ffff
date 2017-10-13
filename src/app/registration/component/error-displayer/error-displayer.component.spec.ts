import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDisplayerComponent } from './error-displayer.component';

describe('ErrorDisplayerComponent', () => {
  let component: ErrorDisplayerComponent;
  let fixture: ComponentFixture<ErrorDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
