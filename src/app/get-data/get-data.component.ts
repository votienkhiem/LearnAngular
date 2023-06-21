import { Component } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.css']
})
export class GetDataComponent {
  constructor(private httpServerServices: HttpServerService
  ) { }

  public dataComments: any = []

  public ngOnInit(): void {
 this.httpServerServices.getComments().subscribe(data => {

      console.log('data', data)
    })


    const payload = {};

    this.httpServerServices.postComments(payload).subscribe(data => {

      console.log('postData', data)

      //  return data;
    });
  }
  public getData():void{
  }
}
