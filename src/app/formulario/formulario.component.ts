import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FormularioComponentProps {
  huespedes: number;
  noches: number;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FormularioComponent implements FormularioComponentProps {
  huespedes = 1;
  noches = 1;
  costoTotal = 0;
  extras = [
    { nombre: ' + Mascotas $350.00 MXN', costo: 350, seleccionado: false },
    { nombre: ' + Calefacción $500.00 MXN', costo: 500, seleccionado: false },
    { nombre: ' + Ruta de Montaña $200.00 MXN', costo: 200, seleccionado: false },
    { nombre: ' + Senderismo $250.00 MXN', costo: 250, seleccionado: false },
    { nombre: ' + Visita a la Cascada $250.00 MXN', costo: 250, seleccionado: false }
  ];

  Math = Math; // Añade esta línea

  calcularCosto() {
    this.costoTotal = (this.huespedes * 500) + (this.noches * 1000) + this.extras.filter(extra => extra.seleccionado).reduce((acc, extra) => acc + extra.costo, 0);
  }

  incrementar(propiedad: keyof FormularioComponentProps) {
    this[propiedad]++;
    this.calcularCosto();
  }

  decrementar(propiedad: keyof FormularioComponentProps) {
    if (this[propiedad] > 1) {
      this[propiedad]--;
      this.calcularCosto();
    }
  }

  reservar() {
    // Aquí puedes agregar la lógica para la reserva
    alert('¡Reserva realizada con éxito!');
  }
}