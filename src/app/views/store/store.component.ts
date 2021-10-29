import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { params, productlist } from '../../models/store.interface';
import { MetaService } from 'src/app/services/meta.service';



@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {

  product!: productlist[];
  filter: any;
  collection: any 
  category: any
  params = this.router.parseUrl(this.router.url).queryParams;

  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    private api: ApiService,
    private router: Router,
    private title: Title,
    private meta: MetaService,
  ) {
    this.setTags()
  }
  
  ngOnInit(): void { 

   if(isPlatformBrowser(this.platformid)){
      this.api.getFilters().subscribe(data=>{
        this.filter = data;
        this.collection = this.filter[0]
        this.category = this.filter[1]
      });
  
      this.api.getAllProducts(this.params).subscribe(data => {
        console.log(data)
        this.product = data;
      });
    }
  }

  reload(){
    setTimeout(() => {
      this.params = this.router.parseUrl(this.router.url).queryParams;
      this.setTags();
      this.api.getAllProducts(this.params).subscribe((data) => {
      this.product = data; 
    });
    }, 0);
  }

  setTags(){
    if(this.params.collection){
      this.title.setTitle('Devoid Online Store | '+this.params.collection);
      this.meta.generateTags({
        title:'Devoid Tienda Online - '+this.params.collection,
        description:'Devoid tienda en linea, colección '+this.params.collection +'"la vida es demasiado corta para vestir aburrido" la mejor marca de hodies en latinoamerica.'
      })
    }else if(this.params.category){
      this.title.setTitle('Devoid Online Store | '+this.params.category);
      this.meta.generateTags({
        title:'Devoid Tienda Online - '+this.params.category,
        description:'Devoid tienda en linea, categoria '+this.params.category+' "la vida es demasiado corta para vestir aburrido" la mejor marca de hodies en latinoamerica.'
      })
    }else{
      this.title.setTitle('Devoid Online Store');
      this.meta.generateTags({
        title:'Devoid Tienda Online - Productos',
        description:'Devoid tienda en linea, "la vida es demasiado corta para vestir aburrido" la mejor marca de hodies en latinoamerica.'
      })
    }
  }


  productview(rutpro: string) {
    this.router.navigate(['store/', rutpro]);
  }
}
