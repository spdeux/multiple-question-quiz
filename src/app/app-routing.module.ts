import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

import { QuizComponent } from './quiz/quiz.component';
import { QuizStepperComponent } from './quiz-stepper/quiz-stepper.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'quizStepper', component: QuizStepperComponent },

  {
    path: 'Auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) ,
  },
    {
    path: '**',
    loadChildren: () => import('./shared/shared/shared.module').then(m => m.SharedModule) ,  
  },
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
