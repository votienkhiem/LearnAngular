import { Component } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public name = 'admin'
  public pass = ''


  constructor(private service: ServiceService) {

  }
}
