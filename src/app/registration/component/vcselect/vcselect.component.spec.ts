import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VcselectComponent } from './vcselect.component';

describe('VcselectComponent', () => {
  let component: VcselectComponent;
  let fixture: ComponentFixture<VcselectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcselectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
