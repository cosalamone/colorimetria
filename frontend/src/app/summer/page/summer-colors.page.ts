import { Component } from '@angular/core';
import { ColorPaletteComponent } from '../../core/components/color-palette.component';
import { SUMMER_COLORS } from '../models/summer-colors.model';

@Component({
  selector: 'app-summer-colors-page',
  standalone: true,
  imports: [ColorPaletteComponent],
  templateUrl: './summer-colors.page.html',
})
export class SummerColorsPageComponent {
  suaveColors = SUMMER_COLORS.filter(c => c.subtype === 'Suave');
  verdaderoColors = SUMMER_COLORS.filter(c => c.subtype === 'Verdadero');
  claroColors = SUMMER_COLORS.filter(c => c.subtype === 'Claro');
}
