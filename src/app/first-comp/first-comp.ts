import { Component } from '@angular/core';
export interface Person {
  name: string;
  age: number;
  isMarried: boolean;
  hobbies: string[];
  printHobbies: () => string[];
}
@Component({
  selector: 'app-first-comp',
  imports: [],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {
  name: string = 'SANKET';
  age: number = 22;
  isMarried: boolean = false;
  hobbies: string[] = ['Animes', 'Cricket', 'Books'];
  address: string = 'Bangalore';

  person: Person = {
    name: 'Harsha',
    age: 23,
    isMarried: false,
    hobbies: ['Roaming', 'Hanging out'],

    printHobbies() {
      return this.hobbies;
    },
  };

  printName() {
    return this.name;
  }
}
