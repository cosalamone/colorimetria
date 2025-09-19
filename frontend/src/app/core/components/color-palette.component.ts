import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-color-palette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css'],
})
export class ColorPaletteComponent {
  @Input() title = '';
  @Input() colors: { name: string; hex: string }[] = [];
  
  isRgbVisible = false;
  copiedColor = '';

  copyToClipboard(hex: string): void {
    navigator.clipboard.writeText(hex).then(() => {
      this.copiedColor = hex;
      setTimeout(() => {
        this.copiedColor = '';
      }, 2000);
    }).catch(() => {
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = hex;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      
      this.copiedColor = hex;
      setTimeout(() => {
        this.copiedColor = '';
      }, 2000);
    });
  }

  hexToRgb(hex: string): string {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      const r = parseInt(result[1], 16);
      const g = parseInt(result[2], 16);
      const b = parseInt(result[3], 16);
      return `rgb(${r}, ${g}, ${b})`;
    }
    return '';
  }

  toggleRgbDisplay(): void {
    this.isRgbVisible = !this.isRgbVisible;
  }

  exportPalette(): void {
    const paletteData = {
      title: this.title,
      colors: this.colors.map(color => ({
        name: color.name,
        hex: color.hex,
        rgb: this.hexToRgb(color.hex)
      })),
      exportDate: new Date().toISOString()
    };

    const jsonString = JSON.stringify(paletteData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `paleta-${this.title.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}
