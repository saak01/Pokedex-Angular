import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailRootComponent } from './pokemon-detail-root.component';

describe('PokemonDetailRootComponent', () => {
  let component: PokemonDetailRootComponent;
  let fixture: ComponentFixture<PokemonDetailRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonDetailRootComponent]
    });
    fixture = TestBed.createComponent(PokemonDetailRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
