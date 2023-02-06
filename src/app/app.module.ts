import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlueSquidComponentsModule } from 'blue-squid-components';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BlueSquidComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
