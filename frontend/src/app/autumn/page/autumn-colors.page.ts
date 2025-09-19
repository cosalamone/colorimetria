import { Component } from '@angular/core';
import { StationPageComponent } from '../../core/components/station-page.component';
import { SubStationModel } from '../../core/models/sub-station.model';

@Component({
  selector: 'app-autumn-colors-page',
  standalone: true,
  imports: [StationPageComponent],
  templateUrl: './autumn-colors.page.html',
})
export class AutumnColorsPageComponent {
  subestaciones: SubStationModel[] = [
    { nombre: 'Otoño Suave', colorFondo: '#ffe7c7' },
    { nombre: 'Otoño Profundo', colorFondo: '#e0b084' },
    { nombre: 'Otoño Cálido', colorFondo: '#ffd6a0' },
  ];
}
