import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithPipeComponent } from './with-pipe.component';

describe('WithPipeComponent', () => {
  let component: WithPipeComponent;
  let fixture: ComponentFixture<WithPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
