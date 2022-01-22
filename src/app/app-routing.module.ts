import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistersComponent } from './pages/registers/component/registers.component';
import { UsersComponent } from './pages/users/component/users.component';

const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    loadChildren: () => import('./pages/registers/registers.module').then(m => m.RegistersModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'reqres-table',
    loadChildren: () => import('./pages/reqres-table/reqres-table.module').then(m => m.ReqresTableModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
