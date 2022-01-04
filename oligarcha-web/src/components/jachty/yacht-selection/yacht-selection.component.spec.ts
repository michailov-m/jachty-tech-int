import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtSelectionComponent } from './yacht-selection.component';

describe('YachtSelectionComponent', () => {
  let component: YachtSelectionComponent;
  let fixture: ComponentFixture<YachtSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
