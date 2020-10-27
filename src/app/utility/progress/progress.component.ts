import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ProgressService } from 'src/app/services/progress.service';
import { Progress } from 'src/app/models/progress';
import { QuizService } from 'src/app/services/quiz.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit, OnDestroy {
  percentage = 0;
  progress: Progress;
  message: string = 'please start the quiz.';
  progressSubscription: Subscription;

  constructor(private progressService: ProgressService, private quizService: QuizService, private toastr: ToastrService) { }

  ngOnInit() {

    this.progressSubscription = this.progressService.isProgressing.subscribe(result => {
      this.progress = result;
      this.percentage = (this.progress.stepNumber / this.progress.totalSteps) * 100;
      this.message = this.progress.stepNumber != this.progress.totalSteps ? `you answer:${this.progress.stepNumber} of ${this.progress.totalSteps} questions` : 'you finished the quiz.';
    });

  }

  ngOnDestroy(): void {
    this.progressSubscription.unsubscribe();
  }

}
