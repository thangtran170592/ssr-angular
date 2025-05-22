import {
  bootstrapApplication,
  enableDebugTools,
} from '@angular/platform-browser';
import { appConfig } from '@app/app.config';
import { AppComponent } from '@app/app.component';
import { ApplicationRef } from '@angular/core';
bootstrapApplication(AppComponent, {
  ...appConfig,
})
  .then((appRef) => {
    const appRefInstance = appRef.injector.get(ApplicationRef);
    enableDebugTools(appRefInstance.components[0]);
  })
  .catch((err) => console.error(err));
