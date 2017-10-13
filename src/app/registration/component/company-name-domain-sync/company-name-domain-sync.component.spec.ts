import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNameDomainSyncComponent } from './company-name-domain-sync.component';

describe('CompanyNameDomainSyncComponent', () => {
  let component: CompanyNameDomainSyncComponent;
  let fixture: ComponentFixture<CompanyNameDomainSyncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNameDomainSyncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNameDomainSyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
