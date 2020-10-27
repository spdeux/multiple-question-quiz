import { SharedModule } from './../shared/shared/shared.module';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    
]

@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        AngularFireAuthModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
       
    ],
    exports: [RouterModule]
})
export class AuthModule {

}