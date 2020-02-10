import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenLijstComponent } from './taken-lijst.component';

describe('TakenLijstComponent', () => {
  let component: TakenLijstComponent;
  let fixture: ComponentFixture<TakenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
