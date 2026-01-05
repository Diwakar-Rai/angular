import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormArray } from '@angular/forms';
import { firstLetter } from '../../../utils/validations/first-letter-capital';
import { confirmPassword } from '../../../utils/validations/confirm-password';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.css',
})
export class Reactiveform {
  genderData = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Others', value: 'others' },
  ];

  countryData = [
    { name: 'India', code: 'IN' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'American Samoa', code: 'AS' },
    { name: 'AndorrA', code: 'AD' },
    { name: 'Angola', code: 'AO' },
    { name: 'Anguilla', code: 'AI' },
    { name: 'Antarctica', code: 'AQ' },
    { name: 'Antigua and Barbuda', code: 'AG' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Armenia', code: 'AM' },
  ];

  subjectData = [
    { value: 'react', label: 'React' },
    { value: 'angular', label: 'Angular' },
    { value: 'vue', label: 'Vue' },
  ];

  form = new FormGroup(
    {
      name: new FormControl('TYSS', [Validators.required, Validators.maxLength(5), firstLetter]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl(null, [Validators.required]),
      country: new FormControl(''),
      subjects: new FormArray([]),
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
    },
    { validators: confirmPassword }
  );

  get subjects(): FormArray {
    return this.form.get('subjects') as FormArray;
  }
  handleChange(event: Event) {
    let target = event.target as HTMLInputElement;
    if (target.checked) {
      // We should never try to mutate the form array directly.
      // console.log(this.form.get('subjects')!.setValue(target.value));
      this.subjects?.push(new FormControl(target.value));
      console.log(this.subjects);
    } else {
      let index = this.subjects?.controls.findIndex((ele) => ele.value == target.value);
      this.subjects.removeAt(index);
    }
  }
  handleSubmit() {
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.subjects);
  }
}
