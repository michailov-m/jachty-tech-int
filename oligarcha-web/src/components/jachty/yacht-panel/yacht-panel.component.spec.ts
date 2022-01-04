import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtPanelComponent } from './yacht-panel.component';

describe('YachtPanelComponent', () => {
  let component: YachtPanelComponent;
  let fixture: ComponentFixture<YachtPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
