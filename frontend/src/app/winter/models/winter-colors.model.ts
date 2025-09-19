export interface WinterColor {
  name: string;
  hex: string;
  subtype: 'Profundo' | 'Frío' | 'Brillante';
}

export const WINTER_COLORS: WinterColor[] = [
  // Profundo
  { name: 'Negro puro', hex: '#000000', subtype: 'Profundo' },
  { name: 'Azul marino', hex: '#191970', subtype: 'Profundo' },
  { name: 'Borgoña profundo', hex: '#800020', subtype: 'Profundo' },
  { name: 'Verde esmeralda', hex: '#50C878', subtype: 'Profundo' },
  { name: 'Púrpura real', hex: '#6A0DAD', subtype: 'Profundo' },
  { name: 'Gris carbón', hex: '#36454F', subtype: 'Profundo' },
  { name: 'Marrón espresso', hex: '#3C2414', subtype: 'Profundo' },
  { name: 'Blanco puro', hex: '#FFFFFF', subtype: 'Profundo' },
  
  // Frío
  { name: 'Gris hielo', hex: '#E6E6FA', subtype: 'Frío' },
  { name: 'Azul hielo', hex: '#B0E0E6', subtype: 'Frío' },
  { name: 'Rosa hielo', hex: '#FFC0CB', subtype: 'Frío' },
  { name: 'Verde hielo', hex: '#AFEEEE', subtype: 'Frío' },
  { name: 'Lavanda hielo', hex: '#E6E6FA', subtype: 'Frío' },
  { name: 'Plateado', hex: '#C0C0C0', subtype: 'Frío' },
  { name: 'Gris perla', hex: '#F8F8FF', subtype: 'Frío' },
  { name: 'Azul polar', hex: '#B4C7E7', subtype: 'Frío' },
  
  // Brillante
  { name: 'Rojo brillante', hex: '#FF0000', subtype: 'Brillante' },
  { name: 'Azul eléctrico', hex: '#0000FF', subtype: 'Brillante' },
  { name: 'Rosa fucsia', hex: '#FF1493', subtype: 'Brillante' },
  { name: 'Verde lima', hex: '#00FF00', subtype: 'Brillante' },
  { name: 'Amarillo limón', hex: '#FFFF00', subtype: 'Brillante' },
  { name: 'Magenta', hex: '#FF00FF', subtype: 'Brillante' },
  { name: 'Cian brillante', hex: '#00FFFF', subtype: 'Brillante' },
  { name: 'Blanco brillante', hex: '#FFFFFF', subtype: 'Brillante' },
];