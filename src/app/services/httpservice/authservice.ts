import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistrationDto } from '../../models/dtos/httpdtos';
import { EnumBackendServices } from '../dataservice/enumbackendservices';
import { ApiUrlResolver } from '../dataservice/apiurlresolver';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private apiurlresolver: ApiUrlResolver
    ) { }

    registerUser(dto: RegistrationDto): Observable<any> {
        const url = this.apiurlresolver.getUrl(EnumBackendServices.registration);
        console.log('url =', url);

        return this.http.post<any>(url, dto, {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}