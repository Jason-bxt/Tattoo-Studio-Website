import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualitysComponent } from './qualitys.component';

describe('QualitysComponent', () => {
  let component: QualitysComponent;
  let fixture: ComponentFixture<QualitysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualitysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualitysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
