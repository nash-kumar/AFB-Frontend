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
    HomePageComponent
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
    MatMenuModule
  ],

    
  
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
