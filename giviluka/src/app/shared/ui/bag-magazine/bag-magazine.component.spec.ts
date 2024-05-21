import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BagMagazineComponent } from './bag-magazine.component';

describe('BagMagazineComponent', () => {
  let component: BagMagazineComponent;
  let fixture: ComponentFixture<BagMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BagMagazineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BagMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
