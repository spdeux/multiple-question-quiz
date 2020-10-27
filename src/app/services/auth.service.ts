import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { UIService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  authChange = new Subject<boolean>();

  constructor(private router: Router, private fireAuth: AngularFireAuth, private uiService: UIService) { }

  register(user: User) {
    this.fireAuth.auth.createUserWithEmailAndPassword(
      user.email,
      user.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  login(user: User) {
    this.uiService.loadingStateChanged.next(true);

    this.fireAuth.auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        this.uiService.loadingStateChanged.next(false);
        
      })
      .catch(error => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(error.message, null, 3000);
      });
  }

  logout() {
    this.fireAuth.auth.signOut();
  }
  isAuth() {
    return this.isAuthenticated;
  }

  initAuthListener() {
    
    
    this.fireAuth.authState.subscribe(user => {
        if (user) {
            this.isAuthenticated = true;
            this.authChange.next(true);
            this.router.navigate(['/welcome']);
        }
        else {
            this.authChange.next(false);
            this.router.navigate(['/']);
            this.isAuthenticated = false;
        }
    });
}

}
