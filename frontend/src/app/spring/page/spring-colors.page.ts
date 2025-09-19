import { Component } from '@angular/core';
import { StationPageComponent } from '../../core/components/station-page.component';
import { ColorPaletteComponent } from '../../core/components/color-palette.component';
import { SubStationModel } from '../../core/models/sub-station.model';
import { SPRING_COLORS } from '../models/spring-colors.model';

@Component({
  selector: 'app-spring-colors-page',
  standalone: true,
  imports: [StationPageComponent, ColorPaletteComponent],
  templateUrl: './spring-colors.page.html',
  styleUrls: ['./spring-colors.page.css'],
})
export class SpringColorsPageComponent {
  subestaciones: SubStationModel[] = [
    { nombre: 'Primavera Clara', colorFondo: '#ffd6e0' },
    { nombre: 'Primavera Cálida', colorFondo: '#fff9c7' },
    { nombre: 'Primavera Brillante', colorFondo: '#d6ffd6' },
  ];

  // Colores por subtipo
  primaveraClaraColors = SPRING_COLORS.filter(color => color.subtype === 'Clara');
  primaveraCalidaColors = SPRING_COLORS.filter(color => color.subtype === 'Cálida');
  primaveraBrillanteColors = SPRING_COLORS.filter(color => color.subtype === 'Brillante');
}
