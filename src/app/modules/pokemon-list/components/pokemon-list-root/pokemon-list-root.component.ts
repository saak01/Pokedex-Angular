import { Component, Input } from '@angular/core';
import { PokemonService } from 'src/app/modules/pokedex/services/pokemons.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list-root',
  templateUrl: './pokemon-list-root.component.html',
  styleUrls: ['./pokemon-list-root.component.scss']
})
export class PokemonListRootComponent {

  constructor(private pokemonService: PokemonService, private router: Router) { }
  @Input() pokemonList :any[] = [];
  @Input() getAllPokemons:any[] = [];

  @Input() isLoading: boolean = true;

  onCardClick(index: number) {
    this.router.navigate(['/pokemon', index]);
  }

  public getSearch(value:string){
    this.pokemonList = this.getAllPokemons;
    if(value != ''){
      const filter = this.pokemonList.filter((res:any) => {
        return !res.name.indexOf(value.toLowerCase());})
        this.pokemonList = filter;
    }
    else{
      this.pokemonList = this.getAllPokemons;
    }

  }
}
