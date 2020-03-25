import { Component, OnInit } from '@angular/core'
import { PokemonService } from '../services/pokemon.service'
import { Pokemon } from '../models/pokemon'
import { Router } from '@angular/router'

@Component({
    selector: 'app-cards-container',
    templateUrl: './cards-container.component.html',
    styleUrls: ['./cards-container.component.scss'],
})
export class CardsContainerComponent implements OnInit {
    pokemons: Array<Pokemon> = new Array<Pokemon>()
    filteredPokemons: Array<Pokemon> = new Array<Pokemon>()
    filteredOut: string
    constructor(
        private pokemonInjected: PokemonService,
        private route: Router
    ) {}

    ngOnInit(): void {
        let pokemonService = this.pokemonInjected
        pokemonService.readPokemons().subscribe(response => {
            for (let result of response['results']) {
                pokemonService.getPokemon(result['url']).subscribe(pkmn => {
                    this.pokemons.push(pkmn)
                    this.filteredPokemons.push(pkmn)
                })
            }
        })
        console.log(this.pokemons)
    }

    passParameters(pokemonReceived: Pokemon) {
        this.route.navigate([
            'show',
            { pokemon: JSON.stringify(pokemonReceived) },
        ])
        console.log(pokemonReceived)
    }

    filterPokemon() {
        // De no existir texto en el filtro, retornar todos los pkmns
        // es decir, la lista original.
        if (this.filteredOut === '') {
            this.filteredPokemons = this.pokemons
            return
        }
        // Filtrar por nombre.
        this.filteredPokemons = this.pokemons.filter(p =>
            p.name.includes(this.filteredOut)
        )
    }
}
