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
import { SearchPipe } from './search.pipe';
import { SortPipe } from './sort.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import {MatMenuModule} from '@angular/material/menu';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    SearchPipe,
    SortPipe,
<<<<<<< HEAD
    HomePageComponent
=======
  
>>>>>>> 51f1c2dcf76b17322c7df6e1b1f4d604a66d5010
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
<<<<<<< HEAD
    NgxPaginationModule,
    MatMenuModule
=======

    HttpClientModule,
    MatDialogModule,
    NgxPaginationModule
>>>>>>> 51f1c2dcf76b17322c7df6e1b1f4d604a66d5010
  ],

    
  
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
