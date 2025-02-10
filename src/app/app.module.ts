import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { SaberComponent } from './saber/saber.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppComponent,
    MenuComponent,
    GaleriaComponent,
    FormularioComponent,
    EstanciasComponent,
    SaberComponent,
    FooterComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }