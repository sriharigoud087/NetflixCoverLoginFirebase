import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterComponent } from "./register/register.component";
import { AngularFireModule } from "@angular/fire";
import { HomepageComponent } from "./homepage/homepage.component";
import { ButtonModule } from "primeng/button";
import { AccordionModule } from "primeng/accordion"; //accordion and accordion tab
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CheckboxModule } from "primeng/checkbox";
import { DropdownModule } from "primeng/dropdown";
import { TabViewModule } from "primeng/tabview";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MoviespageComponent } from "./moviespage/moviespage.component";
import { MoviesComponent } from "./movies/movies.component";
import { WebseriesComponent } from "./webseries/webseries.component";
import { TvshowsComponent } from "./tvshows/tvshows.component";
import { FirebaseService } from "./services/firebase.service";
import { MessageService } from "primeng/api";
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,

    HomepageComponent,

    MoviespageComponent,
    MoviesComponent,
    WebseriesComponent,
    TvshowsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    DialogModule,
    InputTextModule,
    BrowserAnimationsModule,
    CheckboxModule,
    TabViewModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB0h6cytrebLoULOToST3TPOVW1ldJfXVA",
      authDomain: "netflix-page-master.firebaseapp.com",
      projectId: "netflix-page-master",
      storageBucket: "netflix-page-master.appspot.com",
      messagingSenderId: "73391543720",
      appId: "1:73391543720:web:0439d91a7651a21804399d",
    }),
  ],
  providers: [FirebaseService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
