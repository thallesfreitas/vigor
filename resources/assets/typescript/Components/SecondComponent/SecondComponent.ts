import { Component, Inject, Injectable } from '@angular/core';

@Component({
    'selector': 'state-template',
    'templateUrl': '/templates/SecondComponent.main'
})
export class SecondComponent {
  private texto:String
    constructor () {
      this.texto = "lkdjsldkjslka";
        console.log('Second Component was loaded');
    }
}


/*import {Component} from '@angular/core';
import {bootstrap} from '@angular/platform-browser';
import {NgFor} from '@angular/common';
import {HTTP_PROVIDERS, Http} from '@angular/http';

@Component({
selector: 'app',
providers: [HTTP_PROVIDERS],
template: `
  <div>
    <h1>People</h1>
    <ul>
      <li ngFor="let person of people">
        {{person.name}}
      </li>
    </ul>
  </div>
`,
directives: [NgFor]
})
export class App {
people: Object[];
constructor(http:Http) {
  http.get('people.json').subscribe(res => {
    this.people = res.json();
  });
}
active:boolean = false;
toggleActiveState() {
  this.active = !this.active;
}
}

bootstrap(App)
.catch(err => console.error(err));*/