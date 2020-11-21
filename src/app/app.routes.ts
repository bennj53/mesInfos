import { Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { MiamiAnimateComponent } from './resources/miami-animate/miami-animate.component';
import { MousseFollowerComponent } from './resources/mousse-follower/mousse-follower.component';

export const appRoutes: Routes = [
  {
    path: "",
    component: MousseFollowerComponent
  },
  {
    path: "80",
    component: MiamiAnimateComponent
  }
];
