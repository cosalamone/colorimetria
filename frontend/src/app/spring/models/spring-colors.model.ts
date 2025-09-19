export interface SpringColor {
  name: string;
  hex: string;
  subtype: 'Clara' | 'Cálida' | 'Brillante';
}

export const SPRING_COLORS: SpringColor[] = [
  // Clara (Light Spring) - Colores suaves, claros y cálidos
  { name: 'Rosa claro', hex: '#FFE4E1', subtype: 'Clara' },
  { name: 'Coral claro', hex: '#FFF0F5', subtype: 'Clara' },
  { name: 'Melocotón', hex: '#FFDAB9', subtype: 'Clara' },
  { name: 'Amarillo claro', hex: '#FFFACD', subtype: 'Clara' },
  { name: 'Verde claro', hex: '#F0FFF0', subtype: 'Clara' },
  { name: 'Azul claro', hex: '#F0F8FF', subtype: 'Clara' },
  { name: 'Lavanda claro', hex: '#FFF8DC', subtype: 'Clara' },
  { name: 'Beige rosado', hex: '#FAF0E6', subtype: 'Clara' },
  
  // Cálida (Warm Spring) - Colores cálidos con base dorada
  { name: 'Coral cálido', hex: '#FF7F50', subtype: 'Cálida' },
  { name: 'Naranja cálido', hex: '#FFA500', subtype: 'Cálida' },
  { name: 'Amarillo dorado', hex: '#FFD700', subtype: 'Cálida' },
  { name: 'Verde cálido', hex: '#9ACD32', subtype: 'Cálida' },
  { name: 'Turquesa cálido', hex: '#40E0D0', subtype: 'Cálida' },
  { name: 'Rosa cálido', hex: '#FF69B4', subtype: 'Cálida' },
  { name: 'Marfil', hex: '#FFFFF0', subtype: 'Cálida' },
  { name: 'Camel claro', hex: '#F5DEB3', subtype: 'Cálida' },
  
  // Brillante (Clear Spring) - Colores vibrantes y claros
  { name: 'Rosa brillante', hex: '#FF1493', subtype: 'Brillante' },
  { name: 'Naranja brillante', hex: '#FF4500', subtype: 'Brillante' },
  { name: 'Amarillo brillante', hex: '#FFFF00', subtype: 'Brillante' },
  { name: 'Verde brillante', hex: '#00FF7F', subtype: 'Brillante' },
  { name: 'Turquesa vibrante', hex: '#00CED1', subtype: 'Brillante' },
  { name: 'Azul brillante', hex: '#1E90FF', subtype: 'Brillante' },
  { name: 'Violeta brillante', hex: '#9370DB', subtype: 'Brillante' },
  { name: 'Blanco puro', hex: '#FFFFFF', subtype: 'Brillante' },
];