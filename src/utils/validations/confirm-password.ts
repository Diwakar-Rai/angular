import { ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

export function confirmPassword(controls: AbstractControl): ValidationErrors | null {
  let password = controls.get('password')?.value;
  let confirmPassword = controls.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    return {
      passCheck: {
        message: 'Password and confirm password do not match',
      },
    };
  }
  return null;
}
