import { TuiRootModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
// import { ProductCardComponent } from './components/common/product-card/product-card.component';
// import { TitleComponent } from './components/common/title/title.component';
// import { CoolInputDirective } from './shared/directives/cool-input.directive';
// import { IsChickenDirective } from './shared/directives/is-chicken.directive';
// import { ChickenDescriptionPipe } from './pipes/chicken-description.pipe';
//import { WordUpperPipe } from './pipes/word-upper.pipe';
// import { ChickenProductsPipe } from './pipes/chicken-products.pipe';
// import { ProductService } from './services/product.service';
//import { MainComponent } from './views/home/main/main.component';
//import { AboutComponent } from './views/home/about/about.component';
//import { ProductsComponent } from './components/pages/products/products.component';
//import { OrderComponent } from './views/order/order.component';
//import { ProductComponent } from './components/pages/product/product.component';
//import { AuthInterseptor } from './core/auth/auth.interseptor';
//import { ProductsModule } from './views/products/products.module';
import { CoreModule } from './core/core.module';
//import { HomeModule } from './views/home/home.module';
//import { OrderModule } from './views/order/order.module';
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { LayoutComponent } from './views/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule}  from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    // HeaderComponent,
    // FooterComponent,
    // ProductCardComponent,
    // TitleComponent,
    // CoolInputDirective,
    // IsChickenDirective,
    // ChickenDescriptionPipe,
    // WordUpperPipe,
    //ChickenProductsPipe,
    //MainComponent,
    //AboutComponent,
    //ProductsComponent,
    //OrderComponent    ,
    //ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //ProductsModule, //lazy load
    //HomeModule, //lazy load
    //OrderModule, //lazy load
    CoreModule,
    SharedModule,
    //AppRoutingModule должен быть подключен позже остальных
    AppRoutingModule,

    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
      TuiRootModule
],
  providers: [
    //порядок провайдинга важен, они в таком и будут применяться для запроса. Для ответа - в обратном порядке
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterseptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent],
  /*, HeaderComponent,FooterComponent*/
})
export class AppModule {}
