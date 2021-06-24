import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviespageComponent } from './moviespage.component';

describe('MoviespageComponent', () => {
  let component: MoviespageComponent;
  let fixture: ComponentFixture<MoviespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
