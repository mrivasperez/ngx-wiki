import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}
  search(term: string) {
    return 'Look at this result. It is from Wikipedia!';
  }
}
