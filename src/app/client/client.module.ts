import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClientRoutingModule} from './client-routing.module'
import {
  LoginComponent,
  ClientService,
  EventsComponent,
  EventContainerComponent,
  DataToBeEnteredComponent,
  EventImagesComponent,
  NewProductComponent,
  ProductsComponent
} from './';

@NgModule({
  declarations: [
    LoginComponent,
    EventsComponent,
    EventContainerComponent,
    DataToBeEnteredComponent,
    EventImagesComponent,
    NewProductComponent,
    ProductsComponent
  ],
  imports: [
    SharedModule,
    ClientRoutingModule
  ],
  exports: [
  ],
  providers: [
    ClientService
  ],
  bootstrap: []})
export class ClientModule {
}
