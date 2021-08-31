import { Injectable } from '@angular/core'; // Injectable symbol
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Observable, of } from 'rxjs'; // Observable imports
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Injectable decorator
@Injectable({
  providedIn: 'root',
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // Url to web api

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  // returns mock data
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  // Get an individual hero by id
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id: ${id}`);
    return of(hero);
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}

// The Injectable symbol and @Injectable() decorator mark the class as one that participates in the dependency injection system
// The @Injectable() decorator accepts metadata
