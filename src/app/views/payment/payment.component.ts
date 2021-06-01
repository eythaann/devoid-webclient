import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: MetaService
    ){ 
    this.title.setTitle('Payments - Devoid')
    this.meta.generateTags({
      title:'Metodos de pago en Devoid',
      description:'Todos los metos de pago que acepta Devoid en Latinoamerica'
    })
  }

  ngOnInit(): void {
  }

}
