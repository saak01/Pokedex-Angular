import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListRootComponent } from './pokemon-list-root.component';

describe('PokemonListRootComponent', () => {
  let component: PokemonListRootComponent;
  let fixture: ComponentFixture<PokemonListRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonListRootComponent]
    });
    fixture = TestBed.createComponent(PokemonListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
