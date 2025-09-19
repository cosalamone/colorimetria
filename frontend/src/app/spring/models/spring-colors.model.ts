export interface SpringColor {
  name: string;
  hex: string;
  subtype: 'Clara' | 'Cálida' | 'Brillante';
}

export const SPRING_COLORS: SpringColor[] = [
  // Clara
  { name: 'Rosa suave', hex: '#FFD6E0', subtype: 'Clara' },
  { name: 'Coral claro', hex: '#FFB6C1', subtype: 'Clara' },
  { name: 'Melocotón', hex: '#FFCCCB', subtype: 'Clara' },
  { name: 'Amarillo claro', hex: '#FFF9C7', subtype: 'Clara' },
  { name: 'Verde menta', hex: '#D6FFF0', subtype: 'Clara' },
  { name: 'Azul cielo', hex: '#E0F6FF', subtype: 'Clara' },
  { name: 'Lavanda suave', hex: '#E6E0FF', subtype: 'Clara' },
  { name: 'Beige rosado', hex: '#F5F0E8', subtype: 'Clara' },
  
  // Cálida
  { name: 'Coral intenso', hex: '#FF7F7F', subtype: 'Cálida' },
  { name: 'Naranja suave', hex: '#FFB07F', subtype: 'Cálida' },
  { name: 'Amarillo dorado', hex: '#FFD700', subtype: 'Cálida' },
  { name: 'Verde lima', hex: '#CCFF99', subtype: 'Cálida' },
  { name: 'Turquesa cálido', hex: '#7FDDDD', subtype: 'Cálida' },
  { name: 'Rosa cálido', hex: '#FF99CC', subtype: 'Cálida' },
  { name: 'Marfil', hex: '#FFFFF0', subtype: 'Cálida' },
  { name: 'Camel claro', hex: '#E6D2B3', subtype: 'Cálida' },
  
  // Brillante
  { name: 'Fucsia brillante', hex: '#FF1493', subtype: 'Brillante' },
  { name: 'Naranja brillante', hex: '#FF8C00', subtype: 'Brillante' },
  { name: 'Amarillo brillante', hex: '#FFFF00', subtype: 'Brillante' },
  { name: 'Verde brillante', hex: '#00FF7F', subtype: 'Brillante' },
  { name: 'Turquesa vibrante', hex: '#00CED1', subtype: 'Brillante' },
  { name: 'Azul eléctrico', hex: '#0080FF', subtype: 'Brillante' },
  { name: 'Violeta brillante', hex: '#8A2BE2', subtype: 'Brillante' },
  { name: 'Blanco puro', hex: '#FFFFFF', subtype: 'Brillante' },
];