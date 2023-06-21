import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  public submitData(data: any): void {


    console.log('gui vao data',data)
  }
}
