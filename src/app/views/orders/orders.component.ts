import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'
import { ApiService } from '../../services/api/api.service'
import {  Title } from '@angular/platform-browser'
import { MetaService } from 'src/app/services/meta.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order:any;
  swt = false
  
  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
    private api:ApiService, 
    private title: Title,
    private meta: MetaService,
  ){
    this.title.setTitle('Mis Ordenes - Devoid')
    this.meta.generateTags({
      title:'Ordenes',
      description:'Ver mis compras realizadas en devoid'
    })
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformid)){
      this.api.getOrder().subscribe((data:any)=>{
        if(data.orders === 'no items' || data.error){
          this.swt = false;
        }else{
        this.swt = true;
        this.order = data;
        }
      });
    }
  }

}
