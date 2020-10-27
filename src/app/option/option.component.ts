import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Option } from '../models/option';
import { QuizService } from '../services/quiz.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit, OnDestroy {
  currentOptions: Array<Option>;
  allAptions: Array<Option>;
  @Input() questionId: number;
  @Output() optionValueChanged: EventEmitter<Option> = new EventEmitter<Option>();
  optionSubscription: Subscription;

  constructor(private quizService: QuizService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fillCurrentOptions(this.questionId);
  }

  fillCurrentOptions(questionId) {

    this.optionSubscription = this.quizService.getOptions().subscribe(result => {
      this.allAptions = result;
      this.currentOptions = this.allAptions.filter(item => item.questionId == questionId);
    },
      (error) => {
        this.toastr.error("error in loading question's options");
      });
  }

  onClick(option) {
    this.optionValueChanged.emit(option);
  }

  ngOnDestroy(): void {
    this.optionSubscription.unsubscribe();
  }

}
