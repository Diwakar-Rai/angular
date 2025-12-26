import { Component, Input } from '@angular/core';
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
  @Input()
  branch: string = '';

  @Input('status')
  isMarried: boolean = false;

  @Input()
  studentList: string[] = [];

  @Input()
  branchDetails = {} as Branch;
}
