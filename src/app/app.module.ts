import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { HeaderComponent } from './components/header/header.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
