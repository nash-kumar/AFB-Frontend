import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Tile } from '../models/tile';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  public register(data) {
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'})
    };
    let url = AppSettings.BASE_URL + AppSettings.USER_REGISTER ;
    return this.getPost(url,data,httpOption);
  }
  public login(data){
    const httpOption = {
      headers: new HttpHeaders({ 'Content-type' : 'application/json'})
    };
    let url = AppSettings.BASE_URL + AppSettings.USER_LOGIN ;
    return this.getPost(url,data,httpOption);
  }
  public getPost(url,data,key){
    return this.http.post(url, { "data": data }, key)
  }

  public getUsers(){
    return this.http.get<Tile[]>('http://localhost:4101/users/list').map((data) => {return data})
  }
}
