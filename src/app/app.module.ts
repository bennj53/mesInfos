import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MousseFollowerComponent } from './resources/mousse-follower/mousse-follower.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from "./app.routes";
import { MiamiAnimateComponent } from './resources/miami-animate/miami-animate.component';

@NgModule({
  declarations: [
    AppComponent,
    MousseFollowerComponent,
    MiamiAnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
