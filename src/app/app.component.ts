import { Component } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PageListComponent } from './page-list/page-list.component';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  imports: [SearchBarComponent, PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}

  title = 'ngx-wiki';

  onTerm(term: string) {
    const results = this.wikipedia.search(term);
    console.log(results)
  }
}
