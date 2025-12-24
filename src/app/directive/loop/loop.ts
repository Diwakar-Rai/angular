import { Component } from '@angular/core';
// import { NgFor } from '@angular/common';
import { EmpTypes } from '../../../types/loop-types';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-loop',
  imports: [NgClass],
  templateUrl: './loop.html',
  styleUrl: './loop.css',
})
export class Loop {
  nameList: string[] = ['Harsha', 'Subodh', 'Sudhanshu', 'Saomya', 'Pavan', 'Vishnu Priya'];

  employeeList: EmpTypes[] = [
    { id: 'Typ1', name: 'Prajwala', designation: 'CEO', salary: 999999999 },
    { id: 'Typ2', name: 'DS', designation: 'BOD', salary: 9999999999 },
    { id: 'Typ3', name: 'Kiran', designation: 'CEO of CEO', salary: 9999999999 },
    { id: 'Typ4', name: 'Saomya', designation: 'Unknown', salary: -9999999999 },
  ];

  // val: boolean = true;

  handleOdd(e: boolean) {
    console.log(e);
  }
}
