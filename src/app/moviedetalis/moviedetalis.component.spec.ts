import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviedetalisComponent } from './moviedetalis.component';

describe('MoviedetalisComponent', () => {
  let component: MoviedetalisComponent;
  let fixture: ComponentFixture<MoviedetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviedetalisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviedetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
