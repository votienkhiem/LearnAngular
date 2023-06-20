import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name = 'Vox Tiens Khiem';
  public title = 'Vui lòng nhập vào đây !';
  public age = 15;
  public tin = 12;
  public fruits = ['apple', 'orange', 'mango'];
  public fruits2 = [
    {
      id: 0,
      name: 'apple',
      price: 3000,
      discount : true
    },
    {
      id: 0,
      name: 'orange',
      price: 7500,
      discount :false
    },
    {
      id: 0,
      name: 'mango',
      price: 4000,
      discount :false
    },
    {
      id: 0,
      name: 'mangoteen',
      price: -999,
      discount :true
    }
  ];




  public resetName(): void {
    console.log('Tui o day ne !!!')
    this.name = '';
  }
  public ngOnInit(): void {
    console.log('trai cay = ', this.fruits)
    console.log(this.fruits2)
  }
}
