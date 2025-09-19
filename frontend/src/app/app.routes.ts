import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('@core/components/colorimetry-selector.component').then(m => m.ColorimetrySelectorComponent),
	},
		{
			path: 'summer',
			loadComponent: () => import('@summer/page/summer-colors.page').then(m => m.SummerColorsPageComponent),
		},
		{
			path: 'autumn',
			loadComponent: () => import('@autumn/page/autumn-colors.page').then(m => m.AutumnColorsPageComponent),
		},
		{
			path: 'spring',
			loadComponent: () => import('@spring/page/spring-colors.page').then(m => m.SpringColorsPageComponent),
		},
		{
			path: 'winter',
			loadComponent: () => import('@winter/page/winter-colors.page').then(m => m.WinterColorsPageComponent),
		},
];
