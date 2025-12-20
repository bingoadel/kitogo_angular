import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Registration } from './registration';
import { ApiUrlResolver } from '../../services/dataservice/apiurlresolver';

describe('Registration', () => {
  let component: Registration;
  let fixture: ComponentFixture<Registration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registration],
      providers: [ApiUrlResolver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Registration);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
