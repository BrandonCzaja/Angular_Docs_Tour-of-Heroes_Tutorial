import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero'; // Hero Interface
import { HeroService } from '../../services/hero.service';

// Decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  // Heroes Component Property
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // Hero Component property
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };

  constructor(private heroService: HeroService) {}

  // Lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic. The void{} means that it doesn't return anything.
  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // Subscribe is kind of like a promise. It is needed for when HTTP requests are made
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
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
