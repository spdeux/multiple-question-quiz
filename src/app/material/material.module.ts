import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule, MatSnackBarModule, MatNativeDateModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({

    imports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatRadioModule,
        MatStepperModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatGridListModule

    ],
    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatRadioModule,
        MatStepperModule,
        MatFormFieldModule,
        MatSelectModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatGridListModule
    ]
})
export class MaterialModule { }