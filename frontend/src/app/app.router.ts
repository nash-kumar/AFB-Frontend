import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGaurd } from './service/auth-gaurd.service';

export const routes : Routes = [
    {path :'' , component:LoginComponent},
    {path :'login' , component:LoginComponent},
    {path :'register' , component:RegisterComponent},
    {path: 'homepage', component:HomePageComponent,canActivate:[AuthGaurd]},
    {path : 'search' , component:SearchComponent,canActivate:[AuthGaurd]},
    {path :'**' , component:LoginComponent}
]

