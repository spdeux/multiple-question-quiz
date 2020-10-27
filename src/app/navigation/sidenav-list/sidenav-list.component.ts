import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { SidnavService } from 'src/app/services/sidnav.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  authSubscription: Subscription;
  sideNaveSubscription: Subscription;
  @ViewChild('sidenav', { static: true }) sidenav: any;


  constructor(private sidnavService: SidnavService, private authService: AuthService) { }

  ngOnInit() {
    this.sideNaveSubscription = this.sidnavService.toggle.subscribe(state => {
      this.sidenav.toggle();
    });

    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    });
  }

  sideNaveToggle(){
    this.sidenav.toggle();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.sideNaveSubscription.unsubscribe();
    this.authSubscription.unsubscribe();
  }

}
