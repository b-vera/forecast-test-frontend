import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CardsContainerComponent } from './cards-container/cards-container.component'
import { ShowPokemonComponent } from './show-pokemon/show-pokemon.component'

const routes: Routes = [
    {
        path: '',
        component: CardsContainerComponent,
    },
    {
        path: 'show',
        component: ShowPokemonComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
