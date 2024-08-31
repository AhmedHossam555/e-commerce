import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfyCodeComponent } from './verfy-code.component';

describe('VerfyCodeComponent', () => {
  let component: VerfyCodeComponent;
  let fixture: ComponentFixture<VerfyCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerfyCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerfyCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
