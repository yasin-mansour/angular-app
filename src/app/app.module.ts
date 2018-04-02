import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientModule} from './client/client.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    ClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
