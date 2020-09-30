import { Component, Self, Optional } from "@angular/core";
import { ControlValueAccessor, FormControl,  NgControl } from "@angular/forms";

import { autocomplete } from './typeahead.utils';

@Component({
  selector: 'jv-typeahead',
  template: `
    <input [formControl]="control"
           (focus)="onFocus()">

    <ul>
      <li *ngFor="let state of filteredStates"
          (click)="onSelect(state)">
        {{ state }}
      </li>
    </ul>
  `,
})
export class TypeaheadComponent implements ControlValueAccessor {

  control = new FormControl('');
  disabled: boolean;
  private onChange: (value: string) => void;
  private onTouched: () => void;

  constructor(@Optional() @Self() ngControl: NgControl) {
    ngControl.valueAccessor = this;

    setTimeout(() => ngControl.control.setValue('B'), 3000);
  }

  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  writeValue(value: string) {
    console.log('writeValue', value);
    this.control.setValue(value);
  }

  onSelect(value: string) {
    this.onChange(value);
  }

  onFocus() {
    this.onTouched();
  }

  get filteredStates(): string[] {
    return !!this.control.value ?
      autocomplete(this.control.value) : [];
  }
}
