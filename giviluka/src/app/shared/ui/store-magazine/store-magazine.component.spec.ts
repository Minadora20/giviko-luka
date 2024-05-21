import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreMagazineComponent } from './store-magazine.component';

describe('StoreMagazineComponent', () => {
  let component: StoreMagazineComponent;
  let fixture: ComponentFixture<StoreMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreMagazineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoreMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
