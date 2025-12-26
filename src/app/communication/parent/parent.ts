import { Component } from '@angular/core';
import { Child } from './child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
  studentData: string[] = ['Harsha', 'Sudhanshu', 'Sanket'];
  unmarriedStudents: string[] = ['Saomya', 'Vishnu Priya'];
  branchObject = {
    name: 'Qspider BTM',
    location: 'Bangalore',
    noOfStudents: this.unmarriedStudents.length,
  };
}
