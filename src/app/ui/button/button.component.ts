import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() value!: string;
  @Output() eventClick: EventEmitter<boolean> = new EventEmitter();
  constructor() { 
    this.value = '';
  }

  public handlerClick() {
    this.eventClick.emit();
  }

  ngOnInit(): void { }

}
