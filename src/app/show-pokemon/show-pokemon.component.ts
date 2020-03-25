import { Component, OnInit } from '@angular/core'
import { Pokemon } from '../models/pokemon'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-show-pokemon',
    templateUrl: './show-pokemon.component.html',
    styleUrls: ['./show-pokemon.component.scss'],
})
export class ShowPokemonComponent implements OnInit {
    pokemon: Pokemon
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.pokemon = JSON.parse(this.route.snapshot.params.pokemon)
    }
}
