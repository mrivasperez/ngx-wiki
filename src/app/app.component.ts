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
  pages = [];
  constructor(private wikipedia: WikipediaService) {}

  title = 'ngx-wiki';

  onTerm(term: string) {
    this.wikipedia.search(term).subscribe((res: any) => {
      this.pages = res.query.search;
    });
  }
}
