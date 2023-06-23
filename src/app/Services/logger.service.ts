import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  writeCount(count: number): any {
    console.warn(count);
  }
}
