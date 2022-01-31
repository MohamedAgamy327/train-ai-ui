import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CalcService {

  constructor(
    private http: HttpClient
  ) { }

  upload(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}api/data`, model);
  }

  calculateBinVariables(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}calculateBinVariables`, model);
  }

  calculateBinAnalysis(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}calculateBinAnalysis`, model);
  }

  binVariablesOkButton(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}binVariablesOkButton`, model);
  }

  variableAnalyze(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}variableAnalyze`, model);
  }

  variableAnalyzeOk(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}variableAnalyzeOk`, model);
  }

  trainScreen(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}trainScreen`, model);
  }

  trainData(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}trainData`, model);
  }

  trainDataOk(model: any): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}trainDataOk`, model);
  }

}
