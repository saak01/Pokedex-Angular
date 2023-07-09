import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSkeletonComponent } from './details-skeleton.component';

describe('DetailsSkeletonComponent', () => {
  let component: DetailsSkeletonComponent;
  let fixture: ComponentFixture<DetailsSkeletonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsSkeletonComponent]
    });
    fixture = TestBed.createComponent(DetailsSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
