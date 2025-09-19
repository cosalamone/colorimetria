export interface AutumnColor {
  name: string;
  hex: string;
  subtype: 'Suave' | 'Profundo' | 'Cálido';
}

export const AUTUMN_COLORS: AutumnColor[] = [
  // Suave (Soft Autumn) - Colores cálidos con gris añadido
  { name: 'Beige cálido', hex: '#D2B48C', subtype: 'Suave' },
  { name: 'Rosa tostado', hex: '#BC8F8F', subtype: 'Suave' },
  { name: 'Coral suave', hex: '#CD919E', subtype: 'Suave' },
  { name: 'Mostaza suave', hex: '#DAA520', subtype: 'Suave' },
  { name: 'Verde oliva', hex: '#9CAB58', subtype: 'Suave' },
  { name: 'Turquesa tostado', hex: '#5F9EA0', subtype: 'Suave' },
  { name: 'Malva', hex: '#DDA0DD', subtype: 'Suave' },
  { name: 'Crema', hex: '#F5DEB3', subtype: 'Suave' },
  
  // Profundo (Deep Autumn) - Colores ricos, oscuros y cálidos
  { name: 'Borgoña', hex: '#800020', subtype: 'Profundo' },
  { name: 'Naranja quemado', hex: '#CC5500', subtype: 'Profundo' },
  { name: 'Oro viejo', hex: '#B8860B', subtype: 'Profundo' },
  { name: 'Verde bosque', hex: '#355E3B', subtype: 'Profundo' },
  { name: 'Petróleo', hex: '#2F4F4F', subtype: 'Profundo' },
  { name: 'Berenjena', hex: '#614051', subtype: 'Profundo' },
  { name: 'Marrón chocolate', hex: '#7B3F00', subtype: 'Profundo' },
  { name: 'Negro cálido', hex: '#2C1810', subtype: 'Profundo' },
  
  // Cálido (Warm Autumn) - Colores vibrantes y cálidos
  { name: 'Coral intenso', hex: '#FF4500', subtype: 'Cálido' },
  { name: 'Naranja cálido', hex: '#FF7F00', subtype: 'Cálido' },
  { name: 'Dorado brillante', hex: '#FFD700', subtype: 'Cálido' },
  { name: 'Verde cálido', hex: '#9ACD32', subtype: 'Cálido' },
  { name: 'Turquesa cálido', hex: '#48D1CC', subtype: 'Cálido' },
  { name: 'Rojo cálido', hex: '#DC143C', subtype: 'Cálido' },
  { name: 'Marfil cálido', hex: '#FFF8DC', subtype: 'Cálido' },
  { name: 'Camel', hex: '#C19A6B', subtype: 'Cálido' },
];