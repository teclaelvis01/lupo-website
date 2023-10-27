import { Injectable } from '@angular/core';

export interface MetaTagI {
  name?: string;
  content: string;
  property?: string;
}

// class default tags
export class MetaTag implements MetaTagI {
  name?: string | undefined;
  content: string = '';
  property?: string | undefined;
}


@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor() { }

  addTags(tags: MetaTagI[]) {
    tags.forEach(tag => {
      const head = document.getElementsByTagName('head')[0];
      const meta = document.createElement('meta');
      if (tag.name) {
        meta.name = tag.name;
      }
      meta.content = tag.content;
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      }
      head.appendChild(meta);
    });
  }


}
