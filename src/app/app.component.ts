import { Component } from '@angular/core';
import { PersonFormStateInterface } from './components/person-form/person-form.component';

export interface PersonInterface {
  name: string;
  firstName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  price = 5;
  catalog = [
    {label: 'souris', price:5},
    {label: 'ordi', price:500},
    {label: 'ecran', price:500}
  ]
}
