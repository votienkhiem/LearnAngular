import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent {
  public name = 'TypeScript'


  public ngOnInit(): void {
    const message: string = "hello"
    console.log(message)

    const sum3 = (x: number, y: number) => {
      return x + y;
    }
    console.log(sum3(5, 10))

    const name: string = 'khiem'
    console.log('do dai cua chuoi:', name.length)
    console.log('chu viet in hoa:', name.toUpperCase())

    const mangName: string[] = ['khiem', 'tien', 'vo']
    mangName.push('awesome')
    console.log('mang ten:', mangName)
  }
  public test(): void {
  }

}
