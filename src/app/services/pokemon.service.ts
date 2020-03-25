import { Injectable } from '@angular/core'
import { Pokemon } from '../models/pokemon'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    pokemon: Pokemon = new Pokemon()
    private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'
    constructor(private http: HttpClient) {}

    readPokemons() {
        return this.http.get(this.baseUrl)
    }

    getPokemon(apiUrl): Observable<Pokemon> {
        return this.http.get<Pokemon>(apiUrl)
    }
}
