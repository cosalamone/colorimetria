import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubStationModel } from '../models/sub-station.model';
import { CardBaseComponent } from './cards/cardbase.component';

@Component({
  selector: 'app-station-page',
  standalone: true,
  imports: [CardBaseComponent],
  templateUrl: './station-page.component.html',
  styleUrls: ['./station-page.component.css']
})
export class StationPageComponent {
  @Input() nombreEstacion = '';
  @Input() subestaciones: SubStationModel[] = [];

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/']);
  }
}
