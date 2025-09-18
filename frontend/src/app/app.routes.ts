import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./core/components/colorimetry-selector.component').then(m => m.ColorimetrySelectorComponent),
	},
	{
		path: 'summer',
		loadComponent: () => import('./summer/page/summer-colors.page').then(m => m.SummerColorsPageComponent),
	},
	{
		path: 'autumn',
		loadComponent: () => import('./core/components/colorimetry-selector.component').then(m => m.ColorimetrySelectorComponent), // Placeholder
	},
	{
		path: 'spring',
		loadComponent: () => import('./core/components/colorimetry-selector.component').then(m => m.ColorimetrySelectorComponent), // Placeholder
	},
	{
		path: 'winter',
		loadComponent: () => import('./core/components/colorimetry-selector.component').then(m => m.ColorimetrySelectorComponent), // Placeholder
	},
];
