import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalFormComponent } from './total-form.component';

describe('TotalFormComponent', () => {
  let component: TotalFormComponent;
  let fixture: ComponentFixture<TotalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
