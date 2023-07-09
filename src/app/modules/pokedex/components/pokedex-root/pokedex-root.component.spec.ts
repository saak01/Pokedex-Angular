import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexRootComponent } from './pokedex-root.component';

describe('PokedexRootComponent', () => {
  let component: PokedexRootComponent;
  let fixture: ComponentFixture<PokedexRootComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexRootComponent]
    });
    fixture = TestBed.createComponent(PokedexRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
