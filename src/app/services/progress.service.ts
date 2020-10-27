import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Progress } from '../models/progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  isProgressing=new Subject<Progress>();

  constructor() { }
}
