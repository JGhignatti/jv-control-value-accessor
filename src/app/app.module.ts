import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TypeaheadComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
