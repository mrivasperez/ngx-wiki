import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  term = '';
  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.term = value;
  }
  onFormSubmit(event: Event) {
    event.preventDefault();
    console.log(this.term);
  }
  ngOnInit(): void {}
}
