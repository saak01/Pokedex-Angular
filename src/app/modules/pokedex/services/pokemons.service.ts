import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private pokemon:any;
  private url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<any[]> {
    return this.http.get<any>(this.url).pipe(
      map((response: any) => response.results),
      switchMap((results: any[]) => {
        const pokemonDetailsObservables = results.map(pokemon => this.getPokemonDetails(pokemon.url));
        return forkJoin(pokemonDetailsObservables);
      })
    );
  }

  getPokemonDetails(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  getPokemon(index: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${index}/`);
  }



}
