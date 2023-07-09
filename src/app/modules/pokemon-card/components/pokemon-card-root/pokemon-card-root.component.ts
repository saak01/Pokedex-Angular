import { Component, Input,  } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-root',
  templateUrl: './pokemon-card-root.component.html',
  styleUrls: ['./pokemon-card-root.component.scss']
})
export class PokemonCardRootComponent   {
  @Input() pokemon:any;


}
