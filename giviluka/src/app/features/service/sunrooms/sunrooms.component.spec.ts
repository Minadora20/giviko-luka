import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunroomsComponent } from './sunrooms.component';

describe('SunroomsComponent', () => {
  let component: SunroomsComponent;
  let fixture: ComponentFixture<SunroomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunroomsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
