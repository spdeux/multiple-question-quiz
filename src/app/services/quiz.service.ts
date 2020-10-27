import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Option } from './../models/option';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>("http://www.mocky.io/v2/5d987228340000bf1cf48a4f");
  }

  getOptions(): Observable<Option[]> {
    return this.http.get<Option[]>("http://www.mocky.io/v2/5d98789f340000ec08f48a59");
  }

 



}
