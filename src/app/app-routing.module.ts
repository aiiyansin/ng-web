import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
    { path: '' , redirectTo: '/account', pathMatch: 'full'},
    { path: 'account' , component: AccountComponent , canActivate: [AuthGuard]},
    { path : 'auth' , component: AuthComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}