import { Component } from '@angular/core'
import { LoggerService } from 'src/app/Services/logger.service'

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

  constructor(private logger: LoggerService) { }

  count = 0;
  onLogMe() {
    this.logger.writeCount(this.count)
    this.count++;
  }
}
