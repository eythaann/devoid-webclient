import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Support - Devoid');
  }

}
