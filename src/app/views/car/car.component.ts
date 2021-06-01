import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ApiService } from '../../services/api/api.service'
import {FormBuilder } from '@angular/forms'
import { Title } from '@angular/platform-browser'
import { CartDeleteConfirmComponent } from 'src/app/layouts/cart-delete-confirm/cart-delete-confirm.component'
import { MatDialog } from '@angular/material/dialog'
import { MetaService } from 'src/app/services/meta.service'

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    private api:ApiService, 
    private fb:FormBuilder, 
    private title: Title,
    private dialog: MatDialog,
    private meta: MetaService,
    ) {
      this.title.setTitle('Carrito - Devoid')
      this.meta.generateTags({
        title:'Carrito',
        description:'Ve todos los productos de tu carrito de compras en devoid'
      })
    }

  carDelForm = this.fb.group({
    car_id: '',
    token: '',
  });

  carPostForm = this.fb.group({
    total: '',
    token: '',
  })

  cart: boolean = false;
  car:any;
  subtotal!: number;
  totalAmount!: number;
  button: boolean = false;

  ngOnInit(): void {
    
    if(isPlatformBrowser(this.platformid)){
      this.api.getCar().subscribe((data:any)=>{
        if(data.cart === 'no items'){
          this.cart = false;
        }else{
          this.cart = true;
        this.car = data;
        console.log(this.car)
        this.subtotal = this.car.reduce((acc:any,obj:any)=> acc + (obj.product_price * obj.product_amount),
        0).toFixed(2);
        this.totalAmount = this.car.reduce((acc:any, obj:any)=> acc + obj.product_amount,
        0);
        }
      });
    }
    
  }

  opendialog(id:number){
    const dialogRef = this.dialog.open(CartDeleteConfirmComponent, {});
      dialogRef.afterClosed().subscribe(res=>{
        if(res){
          this.carDelete(id)
        }
      })
  }

  carDelete(id:number){
    this.carDelForm.get('car_id')?.setValue(id)
    this.carDelForm.get('token')?.setValue(localStorage.getItem('token'))
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
    this.carPostForm.get('token')?.setValue(localStorage.getItem('token'));
    this.api.payPaypal(this.carPostForm.value).subscribe(((data:any)=>{
      location.href=data;
      this.button = true
      setTimeout(()=>{
        this.button = false
      },3000)
    }));
  }

  payEfectivo(){
    let wass = 'https://wa.me/593960011421?text='+'Hola, mi nombre es '+localStorage.getItem('user')+' y me gustaria pagar en efectivo/deposito. //'+ localStorage.getItem('token');
    location.href= wass;
  
  }
}
