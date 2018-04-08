import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {TableModule} from 'primeng/table';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

import {
 DynamicFormComponent,
  FormDropdownComponent,
  FormTextBoxComponent,
  FormCheckboxComponent,
  DynamicFieldDirective,
  DynamicBindingDirective,
} from './';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    DynamicFieldDirective,
    DynamicBindingDirective
  ],
  imports: [
    HttpModule,
    CommonModule,
    //BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TableModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesModule,
    MessageModule,
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
    DynamicFieldDirective,
    TableModule,
    DynamicBindingDirective,
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [
    DynamicFormComponent,
    FormDropdownComponent,
    FormTextBoxComponent,
    FormCheckboxComponent,
  ]
})
export class SharedModule {
}
