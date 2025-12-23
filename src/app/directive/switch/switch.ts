import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
type User = 'user' | 'admin' | 'publisher';

@Component({
  selector: 'app-switch',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './switch.html',
  styleUrl: './switch.css',
})
export class Switch {
  userType: User = 'admin';
}
