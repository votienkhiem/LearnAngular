import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
  public name = 'admin'
  public pass = ''
  public email = 'emailChild@gmail.com'
  @Input() emailBookParentToChild: string | undefined;
  @Output() emailTemplateChildToParent = new EventEmitter<string>();



  changeEmailValue(): void {
    this.emailTemplateChildToParent.emit(this.email)
  }
  ngOnInit() {
  }

}
