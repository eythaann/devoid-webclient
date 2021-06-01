import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private title:Title,
    private meta:MetaService,
  ) { 
    this.title.setTitle('Mi usuario - Devoid')
    this.meta.generateTags({
      title:'Mi usuario, devoid',
      description:'Devoid configuraciones de usuario'
    })
  }

  ngOnInit(): void {
  }

}
