import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();

  term = '';

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.term = value;
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

  ngOnInit(): void {}
}
