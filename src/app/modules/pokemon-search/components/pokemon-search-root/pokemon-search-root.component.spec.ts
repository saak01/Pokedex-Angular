import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSearchRootComponent } from './pokemon-search-root.component';

describe('PokemonSearchRootComponent', () => {
  let component: PokemonSearchRootComponent;
  let fixture: ComponentFixture<PokemonSearchRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSearchRootComponent]
    });
    fixture = TestBed.createComponent(PokemonSearchRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
