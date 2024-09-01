import { Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'player',
        loadChildren: () => import('./pages/player/player.module').then(m => m.PlayerModule),
        canMatch: [AuthenticationGuard]
    }
];
