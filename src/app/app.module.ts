import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductionComponent } from './production/production.component';
export const routes = [
  {path: '', component: HomeComponent, label: 'Home'},
  {path: 'contact', component: ContactComponent, label: 'Contact'},
  {path: 'product/:id', component: ProductComponent, label: 'Product'},
  {path: 'production', component: ProductionComponent, label: 'Production'}
]
const appRoutes: Routes = routes.map(item => {return {path: item.path, component: item.component}});
@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    ContactComponent,
    HomeComponent,
    ProductComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
