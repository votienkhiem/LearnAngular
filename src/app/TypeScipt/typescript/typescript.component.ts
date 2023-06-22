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


    let ten: string = 'xin chao ngay moi "adfafad"';
    let lot: string = "chao ngay moi hom \"nay\"";
    let dem: string = `xin "chao"`
    console.log(ten)
    console.log(lot)
    console.log(dem)
    let status: boolean = false;

    let persons: {
      name: string
      age: number
    }
    persons = {
      name: "khiem",
      age: 25
    }
    console.log(persons)
  }

  public test(): void {





  }

}
