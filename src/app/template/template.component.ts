import { Component, Input } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public name = 'admin'
  public pass = ''
  public email = 'emailChild@gmail.com'
  @Input() emailBookParentToChild: string | undefined;


  constructor(private service: ServiceService) {

  }
}
