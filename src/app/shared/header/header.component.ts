import { Component } from '@angular/core';
import { faCartPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faSearch = faSearch;
  faUser = faUser;
  faCartPlus = faCartPlus;
  isSearch: boolean = true;

  disableSearch(): void {
    this.isSearch = !this.isSearch
  }
}
