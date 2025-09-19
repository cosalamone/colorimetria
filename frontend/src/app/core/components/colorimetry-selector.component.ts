import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardBaseModel } from '../models/card-base.model';
import { CardBaseComponent } from './cards/cardbase.component';

@Component({
  selector: 'app-colorimetry-selector',
  standalone: true,
  imports: [CardBaseComponent],
  templateUrl: './colorimetry-selector.component.html',
  styleUrls: ['./colorimetry-selector.component.css'],
})
export class ColorimetrySelectorComponent {
  estaciones: CardBaseModel[] = [
    { nombre: 'Verano', colorFondo: '#d6f7ff', ruta: 'summer' },
    { nombre: 'Otoño', colorFondo: '#ffe7c7', ruta: 'autumn' },
    { nombre: 'Invierno', colorFondo: '#e0d6ff', ruta: 'winter' },
    { nombre: 'Primavera', colorFondo: '#ffd6e0', ruta: 'spring' },
  ];

  constructor(private router: Router) {}

  onCardClick(estacion: CardBaseModel) {
    if (estacion.ruta) {
      this.router.navigate(['/' + estacion.ruta]);
    }
  }
}
