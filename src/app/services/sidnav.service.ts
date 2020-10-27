import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidnavService {
   toggle = new Subject();

  constructor() { }

  changeToggle() {
    this.toggle.next();
  }
}
