import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FormularioComponent {
  huespedes = 1;
  noches = 1;
  costoTotal = 0;
  extras = [
    { nombre: 'Mascotas', costo: 50, seleccionado: false },
    { nombre: 'Calefacción', costo: 30, seleccionado: false },
    { nombre: 'Ruta de Montaña', costo: 20, seleccionado: false },
    { nombre: 'Senderismo', costo: 15, seleccionado: false },
    { nombre: 'Visita a la Cascada', costo: 25, seleccionado: false }
  ];
 
  calcularCosto() {
    this.costoTotal = (this.huespedes * this.noches * 100) + this.extras.filter(extra => extra.seleccionado).reduce((acc, extra) => acc + extra.costo, 0);
  }
}
