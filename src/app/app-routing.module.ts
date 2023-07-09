import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDetailRootComponent } from './modules/pokemon-detail/components/pokemon-detail-root/pokemon-detail-root.component';
import { PokedexRootComponent } from './modules/pokedex/components/pokedex-root/pokedex-root.component';


const routes: Routes = [
  { path: '', redirectTo: 'pokedex', pathMatch: 'full' },
  { path: 'pokedex', component: PokedexRootComponent },

  { path: 'pokemon/:id', component: PokemonDetailRootComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
