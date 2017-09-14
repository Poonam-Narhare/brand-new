import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatcompComponent } from './flatcomp.component';

describe('FlatcompComponent', () => {
  let component: FlatcompComponent;
  let fixture: ComponentFixture<FlatcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
