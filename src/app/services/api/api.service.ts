import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import {logini, registeri} from '../../models/login.interface';
import {responsei} from '../../models/response.interface';
import {productlist, productI, carI, params} from '../../models/store.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = 'http://localhost:3000/api/v1/'
  token: string = '';
  
  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    private http:HttpClient
    ) {
      if(isPlatformBrowser(this.platformid)){
        this.token = localStorage.getItem('token')||'';
      }
     }
  /* variables */


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
    if(params.category){
      direccion = this.url + `store?category=${params.category}`;
    }else if(params.collection){
       direccion = this.url + `store?collection=${params.collection}`;
    }else{
      direccion = this.url + `store`;
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

  getOrder(){
    let headers = new HttpHeaders({
      'x-access': this.token,
    })
    let direccion = this.url + 'order';
    return this.http.get(direccion,{headers});
  }

  /*direcciones */
  checkAdress(){
    let headers = new HttpHeaders({
      'x-access': this.token,
    })
    let direccion = this.url + 'check-adress';
    return this.http.get(direccion,{headers});
  }

  postAdress(form:any){
    let direccion = this.url + 'adress';
    return this.http.post(direccion, form);
  }

  /* payments */
  pay(form:any){
    let direccion = this.url + 'order';
    return this.http.post(direccion, form);
  }
}
