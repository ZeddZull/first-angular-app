import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HelloService } from './service/hello.service';
import { LoggerService } from "./service/logger.service";
import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'page2', component: SecondPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HelloService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
