import { describe, it, expect, beforeEach } from 'vitest';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AuthService } from './authservice';
import { LoginDto, RegistrationDto } from '../../models/dtos/httpdtos';
import { HttpClientModule } from '@angular/common/http';
import { ApiUrlResolver } from '../dataservice/apiurlresolver';
import { EnumBackendServices } from '../dataservice/enumbackendservices';
import { firstValueFrom } from 'rxjs';

describe('AuthService Integration (echte REST-Schnittstelle)', () => {
  let service: AuthService;
  let apiurlresolver: ApiUrlResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService, ApiUrlResolver]
    });

    service = TestBed.inject(AuthService);
    apiurlresolver = TestBed.inject(ApiUrlResolver);
  });

  it('should call real registration endpoint and return status', async () => {
    const dto: RegistrationDto = { email: 'test@example.com', password: 'secret' };

    try {
      const response = await firstValueFrom(service.registerUser(dto));
      console.log('Antwort:', response);
      expect(response).toBeTruthy();
    } catch (err: any) {
      // Falls der Server einen Fehler zurückgibt
      console.error('Fehler:', err);
      expect(err.status).toBeDefined();
    }
  });
});

/*describe('AuthService (Integration with TestBed)', () => {
    let service: AuthService;

    beforeEach(() => {
        
        service = new AuthService(new HttpClient())
        
    });

    it('should contact server and return a status code for login', async () => {
        const dto: LoginDto = { email: 'test@example.com', password: 'secret' };

        try {
            const response = await service.login(dto);
            expect(response).toBeTruthy();
        } catch (error: any) {
            // Angular HttpClient wirft HttpErrorResponse bei Fehlern
            const status = (error as { status?: number }).status;
            expect([400]).toContain(status);
        }
    });

    it.only('should contact server and return a status code for registration', async () => {
        const dto: RegistrationDto = { email: 'test@example.com', password: 'secret' };

        try {
            const response = await service.registerUser(dto);
            expect(response).toBeTruthy();
        } catch (error: any) {
            const status = (error as { status?: number }).status;
            expect([400]).toContain(status);
        }
    });
});*/