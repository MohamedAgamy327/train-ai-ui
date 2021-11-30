import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../../models';

@Injectable({
  providedIn: 'root'
})

export class UploadService {

  constructor(
    private http: HttpClient
  ) { }

  upload(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}data`, model);
  }


}
