import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/panel/user',
    pathMatch: 'full' //Usado para que redirija solo cuando la URL concuerda completamente
  },
  {
    path: 'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'user',
        // Cargando de forma Lazy para que se vaya cargando mientras la vamos necesitando
        loadChildren: () =>
          import('@modules/user/user.module').then( (m) => m.UserModule)
      },
      {
        //En caso de no coincidir con ninguna ruta , entra aca
        path: '**',
        redirectTo: '/panel/user',
        pathMatch: 'full'
      }
    ]
  },
  {
    //En caso de no coincidir con ninguna ruta , entra aca
    path: '**',
    redirectTo: '/panel/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
