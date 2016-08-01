import { Component, OnInit } from '@angular/core';
import { CanvasListComponent } from './canvas/canvas-list.component';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  directives: [CanvasListComponent] 
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
