import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { QuizStepperComponent } from './quiz-stepper/quiz-stepper.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { SharedModule } from './shared/shared/shared.module';
import { ProgressComponent } from './utility/progress/progress.component';
import { HomeComponent } from './home/home.component'; 
import { ToastrModule } from 'ngx-toastr';
import { OptionComponent } from './option/option.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthModule } from './auth/auth.module';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './services/auth.service';
import { UIService } from './services/ui.service';


 
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    QuizStepperComponent,
    HeaderComponent,
    SidenavListComponent,
    ProgressComponent,
    HomeComponent,
    OptionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-center', timeOut: 5000 }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AuthModule,
    SharedModule

  ],
  providers: [AuthService, UIService],
  bootstrap: [AppComponent],

})
export class AppModule { }
