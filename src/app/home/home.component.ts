import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuth: boolean = false;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAuth=this.authService.isAuth();
  }


}
