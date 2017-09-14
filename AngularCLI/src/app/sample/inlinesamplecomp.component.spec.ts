import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlinesamplecompComponent } from './inlinesamplecomp.component';

describe('InlinesamplecompComponent', () => {
  let component: InlinesamplecompComponent;
  let fixture: ComponentFixture<InlinesamplecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlinesamplecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlinesamplecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
