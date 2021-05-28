import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'
import { isPlatformBrowser, isPlatformServer } from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformid: object,
  ) { 
    if(isPlatformBrowser(platformid)){
      this.token = localStorage.getItem('token');
      this.user = localStorage.getItem('user');
    }
  }

  ngOnInit(): void {
  }
  
token!: string | null;
user!: string | null;
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
