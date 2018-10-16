import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Tile } from '../models/tile';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public user: any;

  
shareDataSubject = new Subject<any>();


  constructor(private http:HttpClient,private router:Router) { 
  }

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
    let url = AppSettings.BASE_URL + AppSettings.USER_LIST ;
    return this.http.get<Tile[]>(url).map((data) => {return data})
  }

  public getprofile(id){
    let url = AppSettings.BASE_URL + AppSettings.USER_PROFILE + id;
    return this.http.get(url).map(() => {return id})
  }

  sendDataToOtherComponent(data){
    this.shareDataSubject.next(data);
  }

}
