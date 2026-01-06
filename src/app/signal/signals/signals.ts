import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  imports: [FormsModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  name = signal<string>('TYSS');
  age = signal(20);
  user = signal({ name: 'Pavan', designation: 'ASE', doj: 2025 });
  handleName() {
    this.name.set('TESTYANTRA');
  }

  handleUser() {
    // this.user.set({ name: 'Sudhanshu', designation: 'CEO', doj: 1997 });
    this.user.update((value) => {
      return { ...value, name: 'Shantanu' };
    });
  }
}
