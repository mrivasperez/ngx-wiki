import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';

@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngx-wiki';
  onTerm(event: string) {
    console.log(event);
    // const value = (event as EventEmitter<string>)
  }
}
