import { Component } from '@angular/core';
import { StationPageComponent } from '../../core/components/station-page.component';
import { SubStationModel } from '../../core/models/sub-station.model';

@Component({
  selector: 'app-winter-colors-page',
  standalone: true,
  imports: [StationPageComponent],
  templateUrl: './winter-colors.page.html',
})
export class WinterColorsPageComponent {
  subestaciones: SubStationModel[] = [
    { nombre: 'Invierno Profundo', colorFondo: '#e0d6ff' },
    { nombre: 'Invierno Frío', colorFondo: '#b6c6e0' },
    { nombre: 'Invierno Brillante', colorFondo: '#d6e0ff' },
  ];
}
