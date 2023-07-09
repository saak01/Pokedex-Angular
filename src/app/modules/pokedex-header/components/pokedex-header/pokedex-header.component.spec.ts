import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexHeaderComponent } from './pokedex-header.component';

describe('PokedexHeaderComponent', () => {
  let component: PokedexHeaderComponent;
  let fixture: ComponentFixture<PokedexHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexHeaderComponent]
    });
    fixture = TestBed.createComponent(PokedexHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
