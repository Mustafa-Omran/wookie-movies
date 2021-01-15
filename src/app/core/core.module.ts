import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';

//Backend Endpoint settings
import { Settings } from './settings';
import { App } from './app';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  private app: Settings;

  constructor() {
    if (isDevMode) {
      this.app = environment.settings;
    }
    App.Settings = this.app;
  }
}
