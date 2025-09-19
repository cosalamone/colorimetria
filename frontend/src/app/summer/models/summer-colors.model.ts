export interface SummerColor {
  name: string;
  hex: string;
  subtype: 'Suave' | 'Verdadero' | 'Claro';
}

export const SUMMER_COLORS: SummerColor[] = [
  // Suave (Soft Summer) - Colores con gris añadido, tonos polvorosos
  { name: 'Celeste', hex: '#B5D8EB', subtype: 'Suave' },
  { name: 'Azul', hex: '#7BAFD4', subtype: 'Suave' },
  { name: 'Verde claro', hex: '#B7D6C2', subtype: 'Suave' },
  { name: 'Verde oscuro', hex: '#6B8E7C', subtype: 'Suave' },
  { name: 'Amarillo', hex: '#F6E7A6', subtype: 'Suave' },
  { name: 'Mostaza', hex: '#E2C275', subtype: 'Suave' },
  { name: 'Rojo', hex: '#E6A6A1', subtype: 'Suave' },
  { name: 'Naranja', hex: '#F7C59F', subtype: 'Suave' },
  { name: 'Marrón', hex: '#A0958B', subtype: 'Suave' },
  { name: 'Violeta', hex: '#B6A6D6', subtype: 'Suave' },
  { name: 'Rosa', hex: '#E6B6C2', subtype: 'Suave' },
  
  // Verdadero (True Summer) - Colores puros pero fríos, con base azul
  { name: 'Celeste', hex: '#87CEEB', subtype: 'Verdadero' },
  { name: 'Azul', hex: '#4682B4', subtype: 'Verdadero' },
  { name: 'Verde claro', hex: '#90EE90', subtype: 'Verdadero' },
  { name: 'Verde oscuro', hex: '#2E8B57', subtype: 'Verdadero' },
  { name: 'Amarillo', hex: '#F0E68C', subtype: 'Verdadero' },
  { name: 'Mostaza', hex: '#DAA520', subtype: 'Verdadero' },
  { name: 'Rojo', hex: '#DC143C', subtype: 'Verdadero' },
  { name: 'Naranja', hex: '#FF6347', subtype: 'Verdadero' },
  { name: 'Marrón', hex: '#8B7355', subtype: 'Verdadero' },
  { name: 'Violeta', hex: '#9370DB', subtype: 'Verdadero' },
  { name: 'Rosa', hex: '#FF69B4', subtype: 'Verdadero' },
  
  // Claro (Light Summer) - Colores pasteles, muy claros y delicados
  { name: 'Celeste', hex: '#E0F6FF', subtype: 'Claro' },
  { name: 'Azul', hex: '#ADD8E6', subtype: 'Claro' },
  { name: 'Verde claro', hex: '#F0FFF0', subtype: 'Claro' },
  { name: 'Verde oscuro', hex: '#E6F3E6', subtype: 'Claro' },
  { name: 'Amarillo', hex: '#FFFACD', subtype: 'Claro' },
  { name: 'Mostaza', hex: '#F5DEB3', subtype: 'Claro' },
  { name: 'Rojo', hex: '#FFE4E1', subtype: 'Claro' },
  { name: 'Naranja', hex: '#FFEFD5', subtype: 'Claro' },
  { name: 'Marrón', hex: '#F5F5DC', subtype: 'Claro' },
  { name: 'Violeta', hex: '#E6E6FA', subtype: 'Claro' },
  { name: 'Rosa', hex: '#FFF0F5', subtype: 'Claro' },
];
