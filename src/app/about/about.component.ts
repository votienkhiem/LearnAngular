import { Component } from '@angular/core';
import { Directive } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  public loginName = 'admin';
  public myColor = 'yellow';

}
