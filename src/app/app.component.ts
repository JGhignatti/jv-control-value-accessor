import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
    <h3>Parent form value: {{ search }}</h3>
    <span *ngIf="isSearchTouched">Touched</span>
    <hr>
    <form [formGroup]="form">
      <jv-typeahead formControlName="search"></jv-typeahead>
    </form>
  `,
})
export class AppComponent {
  
  form = new FormGroup({
    search: new FormControl({ value: '', disabled: true }),
  });

  constructor() {
    setTimeout(() =>
      this.form.controls['search'].setValue('A'),
      2000,
    );
  }

  get search(): string {
    return this.form.value.search;
  }

  get isSearchTouched(): boolean {
    return this.form.controls['search'].touched;
  }
}
