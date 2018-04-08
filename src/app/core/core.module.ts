import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {
  HttpCommunicationService,
  QuestionControlService,
  BuildQuestions,
  AuthService,
  AuthInterceptor,
  AuthGuard,
  LoginGuard
} from './';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  providers: [
    HttpCommunicationService,
    QuestionControlService,
    BuildQuestions,
    AuthService,
    AuthGuard,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: []
})
export class CoreModule {
}
