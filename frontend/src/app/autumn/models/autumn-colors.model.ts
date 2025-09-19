export interface AutumnColor {
  name: string;
  hex: string;
  subtype: 'Suave' | 'Profundo' | 'Cálido';
}

export const AUTUMN_COLORS: AutumnColor[] = [
  // Suave
  { name: 'Beige cálido', hex: '#F5F5DC', subtype: 'Suave' },
  { name: 'Rosa tostado', hex: '#D2B48C', subtype: 'Suave' },
  { name: 'Coral suave', hex: '#F08080', subtype: 'Suave' },
  { name: 'Mostaza suave', hex: '#FFDB58', subtype: 'Suave' },
  { name: 'Verde oliva', hex: '#9CAB58', subtype: 'Suave' },
  { name: 'Turquesa tostado', hex: '#5F9EA0', subtype: 'Suave' },
  { name: 'Lavanda gris', hex: '#C4A484', subtype: 'Suave' },
  { name: 'Marfil tostado', hex: '#F0E68C', subtype: 'Suave' },
  
  // Profundo
  { name: 'Borgoña', hex: '#800020', subtype: 'Profundo' },
  { name: 'Naranja quemado', hex: '#CC5500', subtype: 'Profundo' },
  { name: 'Oro viejo', hex: '#B8860B', subtype: 'Profundo' },
  { name: 'Verde bosque', hex: '#228B22', subtype: 'Profundo' },
  { name: 'Petróleo', hex: '#2F4F4F', subtype: 'Profundo' },
  { name: 'Berenjena', hex: '#614051', subtype: 'Profundo' },
  { name: 'Marrón chocolate', hex: '#7B3F00', subtype: 'Profundo' },
  { name: 'Negro cálido', hex: '#2F2F2F', subtype: 'Profundo' },
  
  // Cálido
  { name: 'Coral intenso', hex: '#FF4500', subtype: 'Cálido' },
  { name: 'Naranja cálido', hex: '#FF7F00', subtype: 'Cálido' },
  { name: 'Dorado brillante', hex: '#FFD700', subtype: 'Cálido' },
  { name: 'Verde lima', hex: '#32CD32', subtype: 'Cálido' },
  { name: 'Turquesa brillante', hex: '#40E0D0', subtype: 'Cálido' },
  { name: 'Fucsia cálido', hex: '#FF69B4', subtype: 'Cálido' },
  { name: 'Marfil cálido', hex: '#FFF8DC', subtype: 'Cálido' },
  { name: 'Camel', hex: '#C19A6B', subtype: 'Cálido' },
];