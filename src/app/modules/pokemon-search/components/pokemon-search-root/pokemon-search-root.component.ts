import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-search-root',
  templateUrl: './pokemon-search-root.component.html',
  styleUrls: ['./pokemon-search-root.component.scss']
})
export class PokemonSearchRootComponent {
  @Output() public emmitSearch: EventEmitter<any> = new EventEmitter();

  public search(value: string){
    this.emmitSearch.emit(value);
  }
}
