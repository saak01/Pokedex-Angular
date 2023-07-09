import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardRootComponent } from './pokemon-card-root.component';

describe('PokemonCardRootComponent', () => {
  let component: PokemonCardRootComponent;
  let fixture: ComponentFixture<PokemonCardRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardRootComponent]
    });
    fixture = TestBed.createComponent(PokemonCardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
