export interface SummerColor {
  name: string;
  hex: string;
  subtype: 'Suave' | 'Verdadero' | 'Claro';
}

export const SUMMER_COLORS: SummerColor[] = [
  // Suave
  { name: 'Celeste', hex: '#B5D8EB', subtype: 'Suave' },
  { name: 'Azul', hex: '#7BAFD4', subtype: 'Suave' },
  { name: 'Verde claro', hex: '#B7D6C2', subtype: 'Suave' },
  { name: 'Verde oscuro', hex: '#6B8E7C', subtype: 'Suave' },
  { name: 'Amarillo', hex: '#F6E7A6', subtype: 'Suave' },
  { name: 'Mostaza', hex: '#E2C275', subtype: 'Suave' },
  { name: 'Rojo', hex: '#E6A6A1', subtype: 'Suave' },
  { name: 'Naranja', hex: '#F7C59F', subtype: 'Suave' },
  { name: 'Marrón', hex: '#BFA6A0', subtype: 'Suave' },
  { name: 'Violeta', hex: '#B6A6D6', subtype: 'Suave' },
  { name: 'Rosa', hex: '#E6B6C2', subtype: 'Suave' },
  // Verdadero
  { name: 'Celeste', hex: '#A3C7E0', subtype: 'Verdadero' },
  { name: 'Azul', hex: '#5B8DB8', subtype: 'Verdadero' },
  { name: 'Verde claro', hex: '#A3D6B2', subtype: 'Verdadero' },
  { name: 'Verde oscuro', hex: '#4B7C6B', subtype: 'Verdadero' },
  { name: 'Amarillo', hex: '#F6E6A6', subtype: 'Verdadero' },
  { name: 'Mostaza', hex: '#D2B265', subtype: 'Verdadero' },
  { name: 'Rojo', hex: '#D68A8A', subtype: 'Verdadero' },
  { name: 'Naranja', hex: '#F7B59F', subtype: 'Verdadero' },
  { name: 'Marrón', hex: '#A68A80', subtype: 'Verdadero' },
  { name: 'Violeta', hex: '#A68AD6', subtype: 'Verdadero' },
  { name: 'Rosa', hex: '#E6A6B2', subtype: 'Verdadero' },
  // Claro
  { name: 'Celeste', hex: '#D6EAF8', subtype: 'Claro' },
  { name: 'Azul', hex: '#AED6F1', subtype: 'Claro' },
  { name: 'Verde claro', hex: '#D4EFDF', subtype: 'Claro' },
  { name: 'Verde oscuro', hex: '#A9DFBF', subtype: 'Claro' },
  { name: 'Amarillo', hex: '#FCF3CF', subtype: 'Claro' },
  { name: 'Mostaza', hex: '#F9E79F', subtype: 'Claro' },
  { name: 'Rojo', hex: '#F5B7B1', subtype: 'Claro' },
  { name: 'Naranja', hex: '#FAD7A0', subtype: 'Claro' },
  { name: 'Marrón', hex: '#D7BDE2', subtype: 'Claro' },
  { name: 'Violeta', hex: '#D2B4DE', subtype: 'Claro' },
  { name: 'Rosa', hex: '#F9C9D5', subtype: 'Claro' },
];
