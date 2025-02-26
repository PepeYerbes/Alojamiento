import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FormularioComponent } from './formulario/formulario.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { SaberComponent } from './saber/saber.component';
import { FooterComponent } from './footer/footer.component';
import { CaracteristicasComponent } from "./caracteristicas/caracteristicas.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    MenuComponent,
    GaleriaComponent,
    FormularioComponent,
    EstanciasComponent,
    SaberComponent,
    FooterComponent,
    CaracteristicasComponent
]
})
export class AppComponent {
  title = 'Alojamiento';
}