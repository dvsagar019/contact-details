import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(protected http: HttpClient) { }


  getAllDetails(): Observable<any> {
    const url = environment.allDetails;
    return this.http.get(url);
  }

  getDetailsWithParams(year, launch, land): Observable<any> {
    const url = environment.allDetails;
    const yearPayload = !!year ? '&launch_year=' + year : '';
    const launchPayload = !!launch ? '&launch_success=' + launch : '';
    const landingPayload = !!land ? '&land_success=' + land : '';
    return this.http.get(url + yearPayload + launchPayload + landingPayload);
  }
}
