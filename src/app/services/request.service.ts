import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IHotel} from '../interfaces/hotels.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private endpoint = 'http://localhost:3000/hotels';

  constructor(
    private http: HttpClient,
  ) {}

  public getHotelsFromDb(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.endpoint);
  }
}
