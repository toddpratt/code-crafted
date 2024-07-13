import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface RegisterResponse {
  jwt: string;
  user: {
    id: number;
    username: string;
    email: string;
    created_at: string;
    updated_at: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StrapiService {
  private readonly baseUrl = "https://cms.codecrafted.org";

  constructor(private readonly httpClient: HttpClient) { }

  register(username: string, email: string, password: string): Observable<RegisterResponse> {
    const url = `${this.baseUrl}/auth/local/register`;
    return this.httpClient.post<RegisterResponse>(url, {username, email, password});
  }
}
