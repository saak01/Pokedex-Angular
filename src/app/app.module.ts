import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokedexHeaderComponent } from './modules/pokedex-header/components/pokedex-header/pokedex-header.component';
import { PokemonListRootComponent } from './modules/pokemon-list/components/pokemon-list-root/pokemon-list-root.component';
import { PokemonSearchRootComponent } from './modules/pokemon-search/components/pokemon-search-root/pokemon-search-root.component';
import { PokemonCardRootComponent } from './modules/pokemon-card/components/pokemon-card-root/pokemon-card-root.component';
import { PokedexRootComponent } from './modules/pokedex/components/pokedex-root/pokedex-root.component';
import { PokemonDetailRootComponent } from './modules/pokemon-detail/components/pokemon-detail-root/pokemon-detail-root.component';
import { CardSkeletonComponent } from './modules/skeleton/components/card-skeleton/card-skeleton.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { DetailsSkeletonComponent } from './modules/skeleton/components/details-skeleton/details-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexHeaderComponent,
    PokemonListRootComponent,
    PokemonSearchRootComponent,
    PokemonCardRootComponent,
    PokedexRootComponent,
    PokemonDetailRootComponent,
    CardSkeletonComponent,
    DetailsSkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
