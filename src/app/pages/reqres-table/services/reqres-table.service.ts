import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  regEndpoint = environment.reqres

  constructor(
    private http: HttpClient,
  ) { }

  getPaginatedTable(num: number) {
    return this.http.get(`${this.regEndpoint}api/users?page=${num}`);
  }


}

