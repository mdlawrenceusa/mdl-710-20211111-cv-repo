import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { CvInfoComponent } from './cv-info/cv-info.component';
import { CvWorkComponent } from './cv-work/cv-work.component';
import { CvEdComponent } from './cv-ed/cv-ed.component';
import { CvFooterComponent } from './cv-footer/cv-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    CvInfoComponent,
    CvWorkComponent,
    CvEdComponent,
    CvFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
