import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import '../styles/bootstrap.scss';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-app',
  directives: [...ROUTER_DIRECTIVES],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {
  }
}
