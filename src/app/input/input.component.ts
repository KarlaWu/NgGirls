import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  template: `                           
<input [value]="title"              
         (keyup.enter)="changeTitle(inputElement.value)"
         #inputElement>

<button (click)="changeTitle(inputElement.value)">
Save
</button>
    <p>{{ title }}</p>
  `,  
  styleUrls: ['./input.component.css']  
})    
export class InputComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  private title: string = '';           

  constructor() { }                     

  ngOnInit() {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}