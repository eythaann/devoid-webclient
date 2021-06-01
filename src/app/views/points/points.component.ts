import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: MetaService,
  ) {
    this.title.setTitle('Puntos de Venta - Devoid')
    this.meta.generateTags({
      title:'Puntos de venta fisicos de Devoid',
      description:'Puntos de venta devoid en locales, ecuador'
    })
   }

  ngOnInit(): void {
  }

}
