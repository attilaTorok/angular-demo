import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpinningDataLoader } from './spinningDataLoader.directive';
import { BytesToHumanReadablePipe } from './bytes-to-human-readable-.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    SpinningDataLoader,
    BytesToHumanReadablePipe,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
