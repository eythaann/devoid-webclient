import { Injectable } from '@angular/core';
import {logini, registeri} from '../../models/login.interface';
import {responsei} from '../../models/response.interface';
import {productlist, productI, carI, params} from '../../models/store.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  /* variables */
url:string = 'http://100.64.183.173:3000/api/v1/' // 'http://192.168.100.4:3000/api/v1/' //'http://100.64.183.173:3000'
token = localStorage.getItem('token')||'';

/* login */
  loginByEmail(form: logini):Observable<responsei>{
    let direccion = this.url + 'login';
    return this.http.post<responsei>(direccion,form);
  }

  registerByEmail(form:registeri):Observable<responsei>{
    let direccion = this.url + 'register';
    return this.http.post<responsei>(direccion,form);
  }
  
/* Store */
  getAllProducts(params:any):Observable<productlist[]>{
    let direccion;
    if(Object.keys(params).length===0){
       direccion = this.url + `store`;
    }else{
       direccion = this.url + `store?category=${params.category}&&collection=${params.collection}`;
    }
    return this.http.get<productlist[]>(direccion);
  };
  
  getFilters(){
    let direccion = this.url + `filters`;
    return this.http.get(direccion);
  }

  getProduct(rutpro: string):Observable<productI[]>{
    let direccion = this.url + 'store/' + rutpro;
    return this.http.get<productI[]>(direccion);
  };

/* Cart */
  addCar(form:carI){
    let headers = new HttpHeaders({
      'x-access': this.token,
    })
    let direccion = this.url + 'car';
    return this.http.post(direccion, form, {headers});
  }

  getCar(){
    let headers = new HttpHeaders({
      'x-access': this.token,
    })
    let direccion = this.url + 'car';
    return this.http.get(direccion,{headers});
  }

  deleteCart(form:any){
    let direccion = this.url + 'car';
    let options = {
      headers: new HttpHeaders({
      'Content-Tye': 'application/json'
    }),
    body: form}
    return this.http.delete(direccion, options);
  }

  /* payments */
  payPaypal(form:any){
    let direccion = this.url + 'order';
    return this.http.post(direccion, form);
  }
}
