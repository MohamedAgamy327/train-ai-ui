import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})

export class CalcService {

  constructor(
    private http: HttpClient
  ) { }

  upload(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}api/data`, model);
  }

  calculateBinVariables(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}calculateBinVariables`, model);
  }

  calculateBinAnalysis(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}calculateBinAnalysis`, model);
  }

  binVariablesOkButton(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}binVariablesOkButton`, model);
  }




  variableAnalyze(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}variableAnalyze`, model);
  }


}
