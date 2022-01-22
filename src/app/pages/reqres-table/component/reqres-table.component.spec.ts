import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqresTableComponent } from './reqres-table.component';

describe('ReqresTableComponent', () => {
  let component: ReqresTableComponent;
  let fixture: ComponentFixture<ReqresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReqresTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
