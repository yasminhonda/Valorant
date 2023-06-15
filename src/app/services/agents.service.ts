import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  url = `https://valorant-api.com/v1/agents`

  constructor(private http: HttpClient) { }

  public getAllAgents(): Observable<any> {
    return this.http.get<any>(
      `${this.url}`
    )
  }

}
