import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuizService } from '../services/quiz.service';
import { Question } from '../models/question';
import { ProgressService } from '../services/progress.service';
import { Progress } from '../models/progress';
import { ToastrService } from 'ngx-toastr';
import { Option } from "../models/option";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit,OnDestroy {
  step = 0;
  pageLoaded = false;
  questions: Question[];
  fetchedResult = false;
  quizSubscription: Subscription;
  selectedOptions: Array<Option> = new Array<Option>();

  constructor(private quizService: QuizService, private progressService: ProgressService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getQuestions();
  }

  getQuestions() {
    this.quizSubscription = this.quizService.getQuestions().subscribe(result => {
      this.questions = result;
      this.pageLoaded = true;
    },
      (error) => {
      this.pageLoaded = true;
        this.toastr.error("error in loading questions");
      });
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    this.sendProgressInfo(this.step);
  }

  prevStep() {
    this.step--;
    this.sendProgressInfo(this.step);
  }

  sendProgressInfo(step) {
    var progress = new Progress();
    progress.stepNumber = step;
    progress.totalSteps = this.questions.length;
    this.progressService.isProgressing.next(progress);
  }

  showResult() {
    this.fetchedResult = true;
    var correct = 0;
    var totalQuestions = this.questions.length;

    setTimeout(() => {

      for (let index = 0; index < this.selectedOptions.length; index++) {
        if (this.selectedOptions[index].isCorrectAnswer == true)
          correct++;
      }

      this.fetchedResult = false;

      //tostr result
      if (correct == totalQuestions) {
        this.toastr.success(`congratulation!your score is: ${correct}/${totalQuestions}`);
      }
      else {
        this.toastr.info(`your score is: ${correct}/${totalQuestions}`);
      }

    }, 1000);


  }

  ngOnDestroy(): void {
    this.quizSubscription.unsubscribe();
  }

  ///////////////////////Option Event///////////////////////////

  selectOption(newOption) {

    let availableOption = this.checkAvailability(newOption);
    if (availableOption == undefined || availableOption.length == 0) { //if new option does not exist in list, add it to list
      this.selectedOptions.push(newOption);
    }
    else { //if exists and user change the answer, new answer will be overwrite on it

      const existedOption: any = this.selectedOptions.find(option => option.questionId == option.questionId)
      const existedOptionIndex: number = this.selectedOptions.indexOf(existedOption)

      if (existedOptionIndex !== -1) {
        this.selectedOptions.splice(existedOptionIndex, 1);
        this.selectedOptions.push(newOption);
      }

      let index = this.selectedOptions.indexOf(newOption);
      this.selectedOptions[index] = newOption;
    }
  }

  checkAvailability(item: Option) {
    return this.selectedOptions.filter(option => option.questionId == item.questionId);
  }



}
