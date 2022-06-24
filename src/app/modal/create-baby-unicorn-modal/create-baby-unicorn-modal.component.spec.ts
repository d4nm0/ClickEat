import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBabyUnicornModalComponent } from './create-baby-unicorn-modal.component';

describe('CreateBabyUnicornModalComponent', () => {
  let component: CreateBabyUnicornModalComponent;
  let fixture: ComponentFixture<CreateBabyUnicornModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBabyUnicornModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBabyUnicornModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
