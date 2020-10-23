import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLefComponent } from './header-lef.component';

describe('HeaderLefComponent', () => {
  let component: HeaderLefComponent;
  let fixture: ComponentFixture<HeaderLefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
