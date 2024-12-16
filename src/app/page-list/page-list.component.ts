import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  imports: [],
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css',
})
export class PageListComponent {
  @Input() pages: any[] = [];
}
