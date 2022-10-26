import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { TestComponent } from './test/test.component';
import { ChangepasswordComponent } from './pages/settings/changepassword/changepassword.component';




const routes: Routes = [
  {path : "subscribe",component : SubscribeComponent},
  {path : "login",component : LoginComponent},
  {path : "search-results",component : SearchResultsComponent},
  {path : "settings",component : SettingsComponent},
  {path : "home",component : HomeComponent},
  {path : "favorites",component : FavoritesComponent},
  {path : "test",component : TestComponent},
  {path : "changepassword",component : ChangepasswordComponent}

  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

    
  
})
export class AppRoutingModule { }
