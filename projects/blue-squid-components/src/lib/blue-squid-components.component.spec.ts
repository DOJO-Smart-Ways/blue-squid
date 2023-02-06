import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueSquidComponentsComponent } from './blue-squid-components.component';

describe('BlueSquidComponentsComponent', () => {
  let component: BlueSquidComponentsComponent;
  let fixture: ComponentFixture<BlueSquidComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueSquidComponentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlueSquidComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
