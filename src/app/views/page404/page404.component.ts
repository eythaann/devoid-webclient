import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-page404',
  templateUrl: './page404.component.html',
  styleUrls: ['./page404.component.css']
})
export class Page404Component implements OnInit {

  constructor(
    private title: Title,
    private meta:MetaService
    ) {
      this.title.setTitle('404 - Devoid');
      this.meta.generateTags({
        title:'404',
        description: '404 error'
      })
     }

  ngOnInit(): void {
    
  }

}
