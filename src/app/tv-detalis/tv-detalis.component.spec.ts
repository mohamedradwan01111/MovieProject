import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvDetalisComponent } from './tv-detalis.component';

describe('TvDetalisComponent', () => {
  let component: TvDetalisComponent;
  let fixture: ComponentFixture<TvDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvDetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
