import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {

  constructor(
    private meta:MetaService,
    private title: Title,
    ) { 
      this.title.setTitle('Afiliados - Devoid')
      this.meta.generateTags({
        title: 'Afiliados de Devoid',
        description: 'Patrocina nuestra marca a cambio de recompesas y mas'
      })
    }

  ngOnInit(): void {
  }

}
