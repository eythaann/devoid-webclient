import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { params, productlist } from '../../models/store.interface';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  constructor(
    private api: ApiService,
    private router: Router,
    private title: Title,
  ) {}

  product!: productlist[];
  filter: any;
  collection: any 
  category: any

  ngOnInit(): void {
    this.title.setTitle('Devoid Online Store');

    let params = this.router.parseUrl(this.router.url).queryParams;

    this.api.getFilters().subscribe(data=>{
      this.filter = data;
      this.collection = this.filter[0]
      this.category = this.filter[1]
    });

    this.api.getAllProducts(params).subscribe((data) => {
      this.product = data;
    });
  }

  
  reload(){
    setTimeout(() => {
      let params = this.router.parseUrl(this.router.url).queryParams;
      this.api.getAllProducts(params).subscribe((data) => {
      console.log(data)
      this.product = data;
    });
    }, 0);
  }

  productview(rutpro: string) {
    this.router.navigate(['store/', rutpro]);
  }
}
