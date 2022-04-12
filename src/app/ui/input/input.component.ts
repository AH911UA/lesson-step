import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit, OnDestroy {
  @Input() type!: string;
  @Input() styles!: {};
  @Input() errorData!: string;

  @Output() eventOnChange: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.type = 'text';
  }

  public handlerOnChange(event: any): void {
    console.log('inner event: ', event.target.value);

    this.eventOnChange.emit(event.target.value);
  }

  ngOnInit(): void { }
  ngOnDestroy(): void {
    
  }
}
