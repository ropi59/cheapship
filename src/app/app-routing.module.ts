import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesComponent } from "./pages/favorites/favorites.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { SubscribeComponent } from "./pages/subscribe/subscribe.component";



const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'subscribe', component: SubscribeComponent},
    {path: 'favoris', component: FavoritesComponent},
]

@NgModule({
    imports : [
        RouterModule.forRoot(routes)
    ],
    exports :[
        RouterModule
    ] 
    }
)
export class appRoutingModule{

}