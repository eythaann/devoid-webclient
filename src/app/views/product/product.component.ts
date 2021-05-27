import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { carI, productI } from '../../models/store.interface';
import { MatDialog } from '@angular/material/dialog';
import {ProductConfirmComponent} from '../../layouts/product-confirm/product-confirm.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private activatedrouter: ActivatedRoute,
    private api: ApiService,
    private title: Title
  ) {}
  
  product!: productI[];
  colors!: any;
  sizes!: any;
  img!: string;


  carForm = this.fb.group({
    id:     '', 
    color:  'white',
    size:   'm',
    amount: '1',
  });
  
  ngOnInit(): void {

    let rutpro: any = this.activatedrouter.snapshot.paramMap.get('rutpro');

    this.api.getProduct(rutpro).subscribe((data) => {
      console.log(data)
      this.product = data;

      if(this.product[0].error){
        this.router.navigate([rutpro])
      }else{
      this.carForm.get('id')?.setValue(this.product[0].product_id)
      this.title.setTitle(this.product[0].product_name+' - Devoid');
      this.colors = JSON.parse(this.product[0].color)
      this.sizes = JSON.parse(this.product[0].size)
      this.img = `/assets/img/pro/${this.product[0].product_route}_${this.colors[0]}.jpg`;
      }
    });
  }

  onAddCar(form:carI){
    this.api.addCar(form).subscribe(data=>{
      console.log(data);
      const dialogRef = this.dialog.open(ProductConfirmComponent, {});
      dialogRef.afterClosed().subscribe(res=>{
        console.log(res)
      })
    }
  )};
  

  imgChange(color:any){
    this.img = `/assets/img/pro/${this.product[0].product_route}_${color}.jpg`;
  }
}
