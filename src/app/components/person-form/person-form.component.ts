import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PersonInterface } from 'src/app/app.component';

export interface PersonFormStateInterface  {
  touched: boolean;
  valid: boolean;
}

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}
