import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalconeFoundComponent } from "./falcone-found.component";

describe('FalconeFoundComponent', () => {
  let component: FalconeFoundComponent;
  let fixture: ComponentFixture<FalconeFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalconeFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalconeFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
