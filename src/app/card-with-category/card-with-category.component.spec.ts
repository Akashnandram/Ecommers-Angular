import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWithCategoryComponent } from './card-with-category.component';

describe('CardWithCategoryComponent', () => {
  let component: CardWithCategoryComponent;
  let fixture: ComponentFixture<CardWithCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWithCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWithCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
