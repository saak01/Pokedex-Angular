import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { PokemonService } from '../../services/pokemons.service';

@Component({
  selector: 'app-pokedex-root',
  templateUrl: './pokedex-root.component.html',
  styleUrls: ['./pokedex-root.component.scss']
})
export class PokedexRootComponent implements OnInit {
  pokemonList: any[] = [];
  isLoading: boolean = true;
  constructor(private pokemonApi: PokemonService){}

  ngOnInit(): void {
    firstValueFrom(this.pokemonApi.getPokemons())
    .then(data => {
      this.pokemonList = data;
      this.isLoading = false;
    })
    .catch((err) => {
      console.log(err);
      this.isLoading = false;
    })
  }

  numero: number = 10;

  range(count: number): number[] {
    return Array(count).fill(0).map((x, i) => i);
  }
}
