import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(
    private title:Title,
    private meta : MetaService,
  ) { 
    this.title.setTitle('Password Reset - Devoid')
    this.meta.generateTags({
      title:'Reiniciar mi Contraseña de Devoid',
      description:'Reiniciar mi contraseña perdida en devoid, pagina online de venta de ropa'
    })
  }

  ngOnInit(): void {
  }

}
