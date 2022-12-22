import { FavoritesComponent } from './pages/favorites/favorites.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {path:'', component : HomeComponent },
    {path: 'compte', component : SettingsComponent},
    {path: 'favoris', component : FavoritesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule { }