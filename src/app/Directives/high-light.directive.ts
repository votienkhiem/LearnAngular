import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export default class HighLightDirective {
  @Input() appHighLight = 'yellow'
  constructor() {
    // this.el.nativeElement.style.backgroundColor = 'yellow';
  }


}
