import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloService } from './service/hello.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HelloService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
