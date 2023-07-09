import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PokemonService } from 'src/app/modules/pokedex/services/pokemons.service';
@Component({
  selector: 'app-pokemon-detail-root',
  templateUrl: './pokemon-detail-root.component.html',
  styleUrls: ['./pokemon-detail-root.component.scss']
})
export class PokemonDetailRootComponent implements OnInit {
  index_pokemon: any;
  pokemon: any;
  erro: boolean = false;
  isLoading: boolean = true;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService,private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const index = +params['id'];
      this.index_pokemon = index;
    });

    firstValueFrom(this.pokemonService.getPokemon(this.index_pokemon))
    .then((data) => {
      this.pokemon = data;
      setTimeout(() => {
        this.isLoading = false;
      }, 900);
    })
    .catch((err) => {
      this.erro = true;
      this.isLoading = false;
    })

  }

  onClick(){
    this.router.navigate(['/',])
  }
}
