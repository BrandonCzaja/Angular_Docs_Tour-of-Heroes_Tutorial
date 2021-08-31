import { Injectable } from '@angular/core'; // Injectable symbol
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs'; // Observable imports
import { MessageService } from './message.service';

// Injectable decorator
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  // returns mock data
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  // Get an individual hero by id
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id: ${id}`);
    return of(hero);
  }
}

// The Injectable symbol and @Injectable() decorator mark the class as one that participates in the dependency injection system
// The @Injectable() decorator accepts metadata
