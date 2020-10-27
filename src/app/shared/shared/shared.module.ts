import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
     RouterModule.forChild([{path: '', pathMatch: 'full', component: NotFoundComponent}])
  ],
  exports: [
     RouterModule
  ]
})
export class SharedModule { }
