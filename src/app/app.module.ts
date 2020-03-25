import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CardsContainerComponent } from './cards-container/cards-container.component'
import { HeaderComponent } from './header/header.component'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { MatInputModule } from '@angular/material/input'
import { ShowPokemonComponent } from './show-pokemon/show-pokemon.component'
import { HttpClientModule } from '@angular/common/http'
import { PokemonService } from './services/pokemon.service'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe'

@NgModule({
    declarations: [
        AppComponent,
        CardsContainerComponent,
        HeaderComponent,
        ShowPokemonComponent,
        SortPipe,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        HttpClientModule,
        MatButtonToggleModule,
        FormsModule,
    ],
    providers: [PokemonService],
    bootstrap: [AppComponent],
})
export class AppModule {}
