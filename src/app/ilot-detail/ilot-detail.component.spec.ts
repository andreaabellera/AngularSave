import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlotDetailComponent } from './ilot-detail.component';

describe('IlotDetailComponent', () => {
  let component: IlotDetailComponent;
  let fixture: ComponentFixture<IlotDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlotDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlotDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
