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

  public resetName(): void {
    console.log('Tui o day ne !!!')
    this.name = '';
  }

}
