import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SingInComponent } from './user/sing-in/sing-in.component';
import { SingUpComponent  } from './user/sing-up/sing-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



export const appRoutes: Routes = [
    {
        path: 'singup', component: UserComponent,
        children: [{ path: '', component: SingUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SingInComponent }]
    },
    {
        path: 'userprofile', component: UserProfileComponent
    },
    {
        path: '', redirectTo: '/login', pathMatch: 'full'
    }
];
