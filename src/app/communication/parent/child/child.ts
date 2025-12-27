import { Component, Input, EventEmitter, Output } from '@angular/core';
interface Branch {
  name: string;
  location: string;
  noOfStudents: number;
}
@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  hobbies: string[] = ['Cycling', 'swimming', 'sports'];
  @Input()
  branch: string = '';

  @Input('status')
  isMarried: boolean = false;

  @Input()
  studentList: string[] = [];

  @Input()
  branchDetails = {} as Branch;

  @Output()
  publish: EventEmitter<string> = new EventEmitter();

  @Output()
  sendHobbies: EventEmitter<string[]> = new EventEmitter();

  handleEmission() {
    this.publish.emit('Hello Parent');
    this.publish.emit('Bye Parent');
  }

  handleHobbies() {
    this.sendHobbies.emit(this.hobbies);
  }
}
