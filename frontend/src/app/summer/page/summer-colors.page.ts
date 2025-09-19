import { Component } from '@angular/core';
import { StationPageComponent } from '../../core/components/station-page.component';
import { ColorPaletteComponent } from '../../core/components/color-palette.component';
import { SubStationModel } from '../../core/models/sub-station.model';
import { SUMMER_COLORS } from '../models/summer-colors.model';

@Component({
  selector: 'app-summer-colors-page',
  standalone: true,
  imports: [StationPageComponent, ColorPaletteComponent],
  templateUrl: './summer-colors.page.html',
  styleUrls: ['./summer-colors.page.css'],
})
export class SummerColorsPageComponent {
  subestaciones: SubStationModel[] = [
    { nombre: 'Verano Suave', colorFondo: '#B5D8EB' },
    { nombre: 'Verano Verdadero', colorFondo: '#A3C7E0' },
    { nombre: 'Verano Claro', colorFondo: '#D6EAF8' },
  ];

  // Colores por subtipo
  veranoSuaveColors = SUMMER_COLORS.filter(color => color.subtype === 'Suave');
  veranoVerdaderoColors = SUMMER_COLORS.filter(color => color.subtype === 'Verdadero');
  veranoClaroColors = SUMMER_COLORS.filter(color => color.subtype === 'Claro');
}
