import { Component } from '@angular/core';
import { ServiceService } from '../Services/service.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public name = 'admin'
  public pass =''


  constructor(private service: ServiceService ) {

  }
  public submitForm(): void {
    console.log('hello', this.name)
    this.service.submitData({name: this.name, age: 24,password:this.pass})
  }
}
