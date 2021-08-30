import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'; // Hero Interface

// Decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // Hero property
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor() {}

  // Lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic. The void{} means that it doesn't return anything.
  ngOnInit(): void {}
}

/*

--- This is the initial file structure when the component is generated( ng generate component component/heroes )

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

*/
