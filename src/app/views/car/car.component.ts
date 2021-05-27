import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service'
import { Router } from '@angular/router'
import {FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private api:ApiService, private fb:FormBuilder, private rt:Router) {}

  carDelForm = this.fb.group({
    car_id: '',
    token: localStorage.getItem('token'),
  });

  carPostForm = this.fb.group({
    total: '',
    token: localStorage.getItem('token'),
  })

  cart: boolean = true;
  car: any;
  subtotal!: number;
  totalAmount!: number;

  ngOnInit(): void {

    this.api.getCar().subscribe((data:any)=>{
      if(data.cart === 'no items'){
        this.cart = false;
      }else{
      this.car = data;
      this.subtotal = this.car.reduce((acc:any,obj:any)=> acc + (obj.product_price * obj.product_amount),
      0).toFixed(2);
      this.totalAmount = this.car.reduce((acc:any, obj:any)=> acc + obj.product_amount,
      0);
      }
    });
  }

  carDelete(id:number){
    this.carDelForm.get('car_id')?.setValue(id)

    this.api.deleteCart(this.carDelForm.value).subscribe((data)=>{
      for(let i = 0; i < this.car.length; i++){
        if(this.car[i].car_id === id){
          this.car.splice(i,1)
          this.subtotal = this.car.reduce((acc:any,obj:any)=> acc + (obj.product_price * obj.product_amount),
          0).toFixed(2);
          this.totalAmount = this.car.reduce((acc:any, obj:any)=> acc + obj.product_amount,
          0);

          if(this.totalAmount===0){
            this.cart = false;
          }

        }
      }
    });
  }

  payPaypal(){
    this.carPostForm.get('total')?.setValue(this.subtotal);
    this.api.payPaypal(this.carPostForm.value).subscribe(((data:any)=>{
      console.log(data);
      location.href=data;
    }))
  }

  payEfectivo(){
    location.href='https://wa.me/593960011421?text=eyes white M - amount: 1'
  }
}
