import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
interface UserData {
  fullname: string;
  email: string;
  gender: string;
}
@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven.html',
  styleUrl: './template-driven.css',
})
export class TemplateDriven {
  radioData = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'others', label: 'Others' },
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

  destinations: string[] = [];

  userdata: UserData = {
    fullname: '',
    email: '',
    gender: 'male',
  };
  handleSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    let finalData = { ...form.value, destination: this.destinations };
    console.log(finalData);
    // form.reset();
  }

  handleDestination(event: Event) {
    let eventObj = event.target as HTMLInputElement;
    if (eventObj.checked) {
      this.destinations.push(eventObj.value);
    } else {
      this.destinations = this.destinations.filter((ele) => ele !== eventObj.value);
    }
    console.log(this.destinations);
  }
}
