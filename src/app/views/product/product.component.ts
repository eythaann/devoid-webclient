import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { carI, productI } from '../../models/store.interface';
import { MatDialog } from '@angular/material/dialog';
import { ProductConfirmComponent } from '../../layouts/product-confirm/product-confirm.component';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
 
  product!: productI[];
  colors!: any;
  sizes!: any;
  img!: string;
  rutpro: any = this.activatedrouter.snapshot.paramMap.get('rutpro');

  carForm = this.fb.group({
    id:     '', 
    color:  'white',
    size:   'm',
    amount: '1',
  });

  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    public dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private activatedrouter: ActivatedRoute,
    private api: ApiService,
    private title: Title,
    private meta: MetaService,
  ) {
    this.title.setTitle('Devoid Online Store - '+ this.rutpro);
    this.meta.generateTags({
      title:`${this.rutpro} - devoid`,
      description:`${this.rutpro}, producto de devoid aprovecha para comprarlo ya!`
    })
  }
  
  ngOnInit(): void { 
    if(isPlatformBrowser(this.platformid)){
    this.api.getProduct(this.rutpro).subscribe((data) => {
      this.product = data;
      if(this.product[0].error){
        this.router.navigate([this.rutpro])
      }else{
      this.carForm.get('id')?.setValue(this.product[0].product_id)
      this.colors = JSON.parse(this.product[0].color)
      this.sizes = JSON.parse(this.product[0].size)
      this.title.setTitle('Devoid Online Store - '+ this.product[0].product_name);
      this.img = `/assets/img/pro/${this.product[0].product_route}_${this.colors[0]}.jpg`;
      }
    });
    }
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
