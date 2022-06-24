import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUnicornModalComponent } from './create-unicorn-modal.component';

describe('CreateUnicornModalComponent', () => {
  let component: CreateUnicornModalComponent;
  let fixture: ComponentFixture<CreateUnicornModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUnicornModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUnicornModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
