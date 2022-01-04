import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  currentLocale = 'fr';
  messages = {
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
    de: 'Halo'
  }

  constructor() { }

  greet() {
    return this.messages[this.currentLocale];
  }

  getLanguages() {
    return Object.keys(this.messages);
  }

}

// commande pour creer des services :
// ng generate service service/hello
