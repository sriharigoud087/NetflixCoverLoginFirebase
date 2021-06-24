import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomepageComponent } from "../app/homepage/homepage.component";
import { MoviesComponent } from "./movies/movies.component";
import { MoviespageComponent } from "./moviespage/moviespage.component";
import { RegisterComponent } from "./register/register.component";
import { TvshowsComponent } from "./tvshows/tvshows.component";
import { WebseriesComponent } from "./webseries/webseries.component";

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "homepage", component: HomepageComponent },
  { path: "register", component: RegisterComponent },
  { path: "moviespage", component: MoviespageComponent },
  { path: "movies", component: MoviesComponent },
  { path: "webseries", component: WebseriesComponent },
  { path: "tvshows", component: TvshowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
