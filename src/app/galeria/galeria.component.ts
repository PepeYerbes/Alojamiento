import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GaleriaComponent {
  Casa: string = 'Casa portada.webp';
 
    fotos = ['recámara.webp', 'Casa portada.webp', 'sala.webp'];
    imagenSeleccionada: string | null = null;
   
    mostrarImagen(foto: string) {
      this.imagenSeleccionada = foto;
    }
}
