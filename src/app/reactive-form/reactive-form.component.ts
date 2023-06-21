import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServiceService } from '../Services/service.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {


  public formData: FormGroup = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),

  });

  public formDataBuild = this.formBuilder.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    age:['',Validators.required],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      zip: [''],
    })
  })

  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder)
    {}
  ngOnInit(): void {
  }

  public submitForm(): void {
    console.log('hello', this.formData.value)
    // this.service.submitData({ name: this.name, age: 24, password: this.pass })
    this.service.submitData(this.formData.value)
    this.service.submitData(this.formDataBuild.value)

  }
}
