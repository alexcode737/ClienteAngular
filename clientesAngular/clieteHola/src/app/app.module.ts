import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormaReservaComponent } from './forma-reserva/forma-reserva.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { DescripcionComponent } from './descripcion/descripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    FormaReservaComponent,
    HabitacionesComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
