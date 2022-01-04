import { Component, Input } from '@angular/core';
import {Router} from '@angular/router';
import { PersonFormStateInterface } from './components/person-form/person-form.component';
import { routes } from './app.module';

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
  n = 2713;
  routes = routes;
  constructor(private router: Router){}

  goToProduct() {
    this.router.navigate(['/product', this.n]);
  }
}
