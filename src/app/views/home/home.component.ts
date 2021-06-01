import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetaService } from 'src/app/services/meta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private title: Title, private meta: MetaService) {
    this.title.setTitle('Devoid');
    this.meta.generateTags({
      title: 'Devoid Tienda Online',
      description: 'Devoid , elegancia y estilo unico. la vida es demasiado corta para vestir aburrido. Tienda online ropa ecuador',
    });
}

  ngOnInit(): void {
    
  }

}
