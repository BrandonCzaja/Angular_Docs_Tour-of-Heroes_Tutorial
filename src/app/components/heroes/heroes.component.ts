import { Component, OnInit } from '@angular/core';

import { Hero } from '../../hero'; // Hero Interface

// Services
import { HeroService } from '../../services/hero.service';
import { MessageService } from '../../services/message.service';

// Decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []; // Heroes component property

  constructor(private heroService: HeroService) {}

  // Lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic. The void{} means that it doesn't return anything.
  ngOnInit(): void {
    this.getHeroes();
  }

  // Subscribe is kind of like a promise. It is needed for when HTTP requests are made
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  // Add Hero
  add(name: string): void {
    name = name.trim(); // Removes trailing white space
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
