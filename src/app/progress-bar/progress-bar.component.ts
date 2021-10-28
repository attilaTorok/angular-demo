import { Component, OnInit, Input } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  taskInProgress = 0;
  @Input()
  numberOfTasks;
  constructor() {}

  progress() {
    var elem = document.getElementById('progressBar');
    var width: number = 0;
    var id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        if (width % (100 / this.numberOfTasks) == 0) {
          this.taskInProgress++;
        }
      }
    }, 30);
  }

  ngOnInit() {
    this.progress();
  }
}
