import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  standalone: true,
  templateUrl: './color-palette.component.html',
})
export class ColorPaletteComponent {
  @Input() title = '';
  @Input() colors: { name: string; hex: string }[] = [];
}
