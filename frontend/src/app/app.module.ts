import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatInputModule,MatSelectModule,MatRadioModule,MatDatepickerModule,MatNativeDateModule,          MatIconModule,MatToolbarModule,
         MatGridListModule,
         MatExpansionModule,
         MatPaginatorModule,
                              } from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';

import { ServiceService }from './service/service.service';
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from "@angular/material";
import swal from 'sweetalert';

import { SearchComponent } from './search/search.component';
import {NgxPaginationModule} from 'ngx-pagination';

import { HomePageComponent } from './home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';


import { OrderModule } from 'ngx-order-pipe'
import { AuthGaurd } from './service/auth-gaurd.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HomePageComponent,
    ForgotPasswordComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    MatExpansionModule,
    MatPaginatorModule ,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,
    MatMenuModule,
    HttpClientModule,
    OrderModule,
    
  ],
 
  providers: [ServiceService,AuthGaurd],
  bootstrap: [AppComponent]
})

export class AppModule { }

