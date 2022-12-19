import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';
import { registerLocaleData } from '@angular/common';
import { RechercheVolComponent } from './components/recherche-vol/recherche-vol.component';
import { RechercheAvanceComponent } from './components/recherche-avance/recherche-avance.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SubscribeComponent,
        SettingsComponent,
        FavoritesComponent,
        SearchResultsComponent,
        HeaderComponent,
        RechercheVolComponent,
        RechercheAvanceComponent,
    ],
    imports: [
        BrowserModule,
        HeaderComponent,
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'fr-FR'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule { 
    constructor(){
        registerLocaleData(fr.default);
    }
}
