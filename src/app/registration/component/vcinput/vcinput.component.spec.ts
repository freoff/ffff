import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcinputComponent } from './vcinput.component';

describe('VcinputComponent', () => {
  let component: VcinputComponent;
  let fixture: ComponentFixture<VcinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
