import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent {
  constructor(private httpServerServices: HttpServerService) { }

  public ngOnInit(): void {
    this.httpServerServices.getComments().subscribe(data => {

      console.log('data', data)
    })


  }

}
