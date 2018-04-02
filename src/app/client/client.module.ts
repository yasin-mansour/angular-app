import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {
  LoginComponent
} from './';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoginComponent,
  ],
  providers: [],
  bootstrap: []})
export class ClientModule {
}
