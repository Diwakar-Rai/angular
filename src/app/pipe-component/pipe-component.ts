import { Component } from '@angular/core';
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { ReduceStringPipe } from '../Pipe/reduce-string';
import { DesignationPipe } from '../Pipe/designation-pipe';

@Component({
  selector: 'app-pipe-component',
  imports: [
    NgClass,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    ReduceStringPipe,
    DesignationPipe,
  ],
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css',
})
export class PipeComponent {
  len: number = 10;
  employeeData = [
    {
      id: 1,
      name: 'pavan vasala',
      doj: new Date(2025, 7, 28),
      salary: 299999,
      increment: 18759,
      designation: 'senior software engineer',
      qualification: 'b.sc',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima dolores illum repudiandae! Eos molestias id repellat incidunt minus iste corporis voluptatem ab, voluptates doloremque necessitatibus at earum? Temporibus, libero?',
    },
    {
      id: 2,
      name: 'sudhanshu panda',
      doj: new Date(2025, 11, 12),
      salary: 45789349,
      increment: 13459,
      designation: 'software engineer',
      qualification: 'mca',
      bio: 'Lorem ipsum',
    },
    {
      id: 3,
      name: 'saomya devi',
      doj: new Date(2025, 5, 23),
      salary: 457,
      increment: 1,
      designation: 'associate software engineer',
      qualification: 'mca',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima dolores illum repudiandae! Eos molestias id repellat incidunt minus iste corporis voluptatem ab, voluptates doloremque necessitatibus at earum? Temporibus, libero?',
    },
    {
      id: 4,
      name: 'vishnu priya',
      doj: new Date(2025, 10, 28),
      salary: 457000,
      increment: 10000,
      designation: 'associate software engineer',
      qualification: 'bca',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima dolores illum repudiandae! Eos molestias id repellat incidunt minus iste corporis voluptatem ab, voluptates doloremque necessitatibus at earum? Temporibus, libero?',
    },
    {
      id: 5,
      name: 'harsha',
      doj: new Date(2025, 7, 10),
      salary: 457000384,
      increment: 10000666,
      designation: 'associate software engineer',
      qualification: 'b.tech',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima dolores illum repudiandae! Eos molestias id repellat incidunt minus iste corporis voluptatem ab, voluptates doloremque necessitatibus at earum? Temporibus, libero?',
    },
    {
      id: 6,
      name: 'sanket chavan',
      doj: new Date(2025, 7, 13),
      salary: 457000384,
      increment: 10000666,
      designation: 'associate software engineer',
      qualification: 'b.tech',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minima dolores illum repudiandae! Eos molestias id repellat incidunt minus iste corporis voluptatem ab, voluptates doloremque necessitatibus at earum? Temporibus, libero?',
    },
  ];
}
