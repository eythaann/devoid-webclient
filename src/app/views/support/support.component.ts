import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: MetaService
    ) {
      this.title.setTitle('Support - Devoid');
      this.meta.generateTags({
        title:'Soporte de Devoid',
        description:'Pagina de ayuda, soporte en Devoid, despeja todas tus duda, deja un correo o ve nuestro foro.'
      })
     }

  ngOnInit(): void {}

}
