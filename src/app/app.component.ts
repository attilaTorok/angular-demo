import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo';

  someData = 1100;

  random() {
    var number = Math.random() * (Math.random() * 100000);
    this.someData = parseInt(number.toString(2), 2);
  }
}
