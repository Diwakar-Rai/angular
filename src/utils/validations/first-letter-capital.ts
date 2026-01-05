import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const firstLetter: ValidatorFn = (controls: AbstractControl): ValidationErrors | null => {
  let name = controls?.value;

  let res = name[0] === name[0]?.toUpperCase();

  if (!res) {
    return { capital: { status: true, message: 'Please make sure the first letter is capital' } };
  }

  return null;
};
