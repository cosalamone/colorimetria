import { Component } from '@angular/core';
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
    { nombre: 'Verano', colorFondo: '#d6f7ff' },
    { nombre: 'Otoño', colorFondo: '#ffe7c7' },
    { nombre: 'Invierno', colorFondo: '#e0d6ff' },
    { nombre: 'Primavera', colorFondo: '#ffd6e0' },
  ];

  onSelect(estacion: string) {
    console.log('Seleccionaste:', estacion);
  }
}
