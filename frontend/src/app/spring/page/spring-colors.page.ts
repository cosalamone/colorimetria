import { Component } from '@angular/core';
import { StationPageComponent } from '../../core/components/station-page.component';
import { SubStationModel } from '../../core/models/sub-station.model';

@Component({
  selector: 'app-spring-colors-page',
  standalone: true,
  imports: [StationPageComponent],
  templateUrl: './spring-colors.page.html',
})
export class SpringColorsPageComponent {
  subestaciones: SubStationModel[] = [
    { nombre: 'Primavera Clara', colorFondo: '#ffd6e0' },
    { nombre: 'Primavera Cálida', colorFondo: '#fff9c7' },
    { nombre: 'Primavera Brillante', colorFondo: '#d6ffd6' },
  ];
}
