import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  greet() {
    return 'Hello';
  }
}

// commande pour creer des services :
// ng generate service service/hello
