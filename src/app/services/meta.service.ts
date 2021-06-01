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
      this.meta.updateTag({ name:'title', content:config.title})
    }
    if(config.description !== ''){
      this.meta.updateTag({ name:'description', content:config.description})
    }
  }


}
