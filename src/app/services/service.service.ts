import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  post(data){
    return this.http.post('https://dry-peak-93050.herokuapp.com/api/post', data);
  }
}
