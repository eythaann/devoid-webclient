import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  msg = this.fb.group({
    email: '',
    name: '',
    text: '',
  })

  constructor(
    private title: Title,
    private meta: MetaService,
    private fb: FormBuilder
    ) {
      this.title.setTitle('Support - Devoid');
      this.meta.generateTags({
        title:'Soporte de Devoid',
        description:'Pagina de ayuda, soporte en Devoid, despeja todas tus duda, deja un correo o ve nuestro foro.'
      })
     }

  ngOnInit(): void {}

}
