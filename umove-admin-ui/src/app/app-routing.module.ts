import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// tslint:disable-next-line: max-line-length
const routes: Routes = [{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{ path: 'documents', loadChildren: () => import('./documents/documents.module').then(m => m.DocumentsModule) }] ;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
