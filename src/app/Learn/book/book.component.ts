import { Component } from '@angular/core'


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  fontColor: string = 'blue'
  sayHello: number = 1
  canClick: boolean = false
  message: string = 'Say, World'
  emailBook: string = 'parentbook@gmail.com'

  sayMessage(): void {
    alert(this.message)
  }

  message2: string = "I'm read only!";
  canEdit: boolean = false;
  onEditClick(): void {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message2 = 'You can edit me!'
    } else {
      this.message2 = "I'm read only!"
    }
  }


  changeEmailParent(): void {
    this.emailBook = 'votienkhiem@gmail.com';
  }
  childEmailChange(event: any) {
    this.emailBook = event;
  }
}
