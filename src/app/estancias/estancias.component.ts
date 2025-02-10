import { Component } from '@angular/core';

@Component({
  selector: 'app-estancias',
  templateUrl: './estancias.component.html',
  styleUrls: ['./estancias.component.css'],
  standalone: true
})
export class EstanciasComponent {
  estancias = [
    { foto: 'ESTANCIA 1.jpg', descripcion: 'Descripción 1' },
    { foto: 'ESTANCIA 2.jpg', descripcion: 'Descripción 2' },
    { foto: 'ESTANCIA 3.jpg', descripcion: 'Descripción 3' }
  ];
}
