export interface WinterColor {
  name: string;
  hex: string;
  subtype: 'Profundo' | 'Frío' | 'Brillante';
}

export const WINTER_COLORS: WinterColor[] = [
  // Profundo (Deep Winter) - Colores oscuros, intensos y fríos
  { name: 'Negro puro', hex: '#000000', subtype: 'Profundo' },
  { name: 'Azul marino', hex: '#000080', subtype: 'Profundo' },
  { name: 'Borgoña profundo', hex: '#800020', subtype: 'Profundo' },
  { name: 'Verde esmeralda', hex: '#50C878', subtype: 'Profundo' },
  { name: 'Púrpura real', hex: '#6A0DAD', subtype: 'Profundo' },
  { name: 'Gris carbón', hex: '#36454F', subtype: 'Profundo' },
  { name: 'Marrón frío', hex: '#654321', subtype: 'Profundo' },
  { name: 'Blanco puro', hex: '#FFFFFF', subtype: 'Profundo' },
  
  // Frío (Cool Winter) - Colores helados con subtono azul
  { name: 'Gris hielo', hex: '#F0F8FF', subtype: 'Frío' },
  { name: 'Azul hielo', hex: '#B0E0E6', subtype: 'Frío' },
  { name: 'Rosa hielo', hex: '#FFE4E1', subtype: 'Frío' },
  { name: 'Verde hielo', hex: '#F0FFFF', subtype: 'Frío' },
  { name: 'Lavanda hielo', hex: '#E6E6FA', subtype: 'Frío' },
  { name: 'Plateado', hex: '#C0C0C0', subtype: 'Frío' },
  { name: 'Gris perla', hex: '#F8F8FF', subtype: 'Frío' },
  { name: 'Azul polar', hex: '#E0F6FF', subtype: 'Frío' },
  
  // Brillante (Clear Winter) - Colores puros, contrastantes y claros
  { name: 'Rojo puro', hex: '#FF0000', subtype: 'Brillante' },
  { name: 'Azul real', hex: '#0000FF', subtype: 'Brillante' },
  { name: 'Rosa fucsia', hex: '#FF1493', subtype: 'Brillante' },
  { name: 'Verde esmeralda', hex: '#00FF7F', subtype: 'Brillante' },
  { name: 'Amarillo limón', hex: '#FFFF00', subtype: 'Brillante' },
  { name: 'Magenta', hex: '#FF00FF', subtype: 'Brillante' },
  { name: 'Cian', hex: '#00FFFF', subtype: 'Brillante' },
  { name: 'Blanco brillante', hex: '#FFFFFF', subtype: 'Brillante' },
];