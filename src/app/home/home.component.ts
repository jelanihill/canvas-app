import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isToggled = false;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

  toggleNav() {
    this.isToggled = !this.isToggled;
  }

}
