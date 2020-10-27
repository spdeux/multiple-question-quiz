import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // isShowingOptions: boolean = false;
  // selected: string = '';
  constructor() { 
  }

  ngOnInit() {
  }

  showOptions() {
    // this.isShowingOptions = true;
  }

}
