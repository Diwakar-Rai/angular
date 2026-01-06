import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  imports: [],
  templateUrl: './life-cycle.html',
  styleUrl: './life-cycle.css',
})
export class LifeCycle
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    OnDestroy
{
  @ViewChild('header')
  el: ElementRef | null = null;

  name: string = 'Testyantra';

  timer: number = 0;
  @Input()
  count: number = 0;
  constructor() {
    console.log('======================Constructor Called===================');
    // The constructor method is very important from the POV of Dependency injection(DI)
    console.log(this);
    console.log('**********************Constructor End**********************');
  }

  // ! ngOnchanges is the method that is called whenever the parent provides data to the child with the help of @Input
  // ! We can access a SimpleChanges object by providing a parameter. this object has the info about the old and the new data
  ngOnChanges(simple: SimpleChanges): void {
    console.log('======================NgOnChanges Called===================');
    console.log(this);
    console.log(simple);
    console.log('**********************NgOnChanges End**********************');
  }

  ngOnInit() {
    console.log('======================NgOnInit Called===================');
    console.log(this);
    console.log('**********************NgOnInit End**********************');
  }

  ngDoCheck(): void {
    console.log('======================NgDoCheck Called===================');
    console.log(this);
    console.log('**********************NgDoCheck End**********************');
  }

  ngAfterContentInit(): void {
    console.log('======================NgAfterContentInit Called===================');
    console.log(this);
    console.log('**********************NgAfterContentInit End**********************');
  }

  ngAfterContentChecked(): void {
    console.log('======================NgAfterContentChecked Called===================');
    console.log(this);
    console.log('**********************NgAfterContentChecked End**********************');
  }
  ngAfterViewInit(): void {
    console.log('======================NgAfterViewInit Called===================');
    console.log(this);
    let ele = this.el?.nativeElement;
    ele.style.border = '2px solid red';

    window.addEventListener('click', this.handleClick);
    console.log('**********************NgAfterViewInit End**********************');
  }

  ngOnDestroy(): void {
    console.log('======================NgOnDestroy Called===================');
    console.log(this);
    window.removeEventListener('click', this.handleClick);
    clearInterval(this.timer);
    console.log('**********************NgOnDestroy End**********************');
  }

  handleNameChange() {
    this.name = 'TYSS';
  }

  handleClick() {
    console.log('You have clicked on window');
  }

  startTimer() {
    this.timer = setInterval(() => {
      console.log('time is precious');
    }, 1000);
  }
}
