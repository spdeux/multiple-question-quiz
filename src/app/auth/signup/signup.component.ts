import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UIService } from 'src/app/services/ui.service';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginInfo } from 'src/app/models/loginInfo';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading: boolean = false;
  private loadingSubs: Subscription;
  form:FormGroup;
  logininformation=new LoginInfo();
  constructor(private authService: AuthService, private uiService: UIService,private formBuilder: FormBuilder) { }
  get ctrl() { return this.form.controls; }
  ngOnInit() {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoaded => {
      this.isLoading = isLoaded;
    });
    this.logininformation=new LoginInfo()

      this.form = this.formBuilder.group({
        userName: ['', [Validators.required,Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")]],
        password: ['', [Validators.required,Validators.minLength(6)]],
        birthdate: ['', ],
        rememberMe: ['',[Validators.required] ],
    });
      
  }

  onSubmit() {
    this.isLoading=true;
    this.authService.register({
      email: this.logininformation.userName,
      password: this.logininformation.password
    });

  }

  ngOnDestroy(): void {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }

}
