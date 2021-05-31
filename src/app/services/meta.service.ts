import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser'
import { metaTags } from '../models/meta.interface';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) { 
  }

  generateTags(config:metaTags){
    if(config.title !== ''){
      this.meta.updateTag({ property:'og:title', content:config.title})
    }
    if(config.image !== ''){
      this.meta.updateTag({ property:'og:image', content:'https://devoid.shop/assets/img/meta/'+config.image})
    }
    if(config.description !== ''){
      this.meta.updateTag({ property:'og:description', content:config.description})
    }
  }


}
