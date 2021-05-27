import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
token = localStorage.getItem('token');
user = localStorage.getItem('user');
menu = "menuOff";
menu2 = "menuOff2"

menuSwitch(){
  if(this.menu==="menuOff") this.menu="menuOn"; else this.menu="menuOff"
}
menuSwitch2(){
  if(this.menu2==="menuOff2") this.menu2="menuOn2"; else this.menu2="menuOff2"
}

closeSession(){
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  location.reload()
}

}
