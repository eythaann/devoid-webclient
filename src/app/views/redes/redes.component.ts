import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {

  constructor(
    private title:Title,
    private meta: MetaService,
  ) { 
    this.title.setTitle('Redes - Devoid')
    this.meta.generateTags({
      title:'Redes de Devoid',
      description:'Todas las Redes Sociales de Devoid, Siguenos en todas!'
    })
  }

  ngOnInit(): void {
  }

}
