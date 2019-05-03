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

  list(){
    return this.http.get('https://dry-peak-93050.herokuapp.com/api/list');
  }

  getImg(id){
    return this.http.get('https://dry-peak-93050.herokuapp.com/api/img/'+id);
  }

  public uploadImage(image: File){
    const formData = new FormData();

    formData.append('file', image);

    return this.http.post('https://dry-peak-93050.herokuapp.com/api/img', formData);
  }
}
