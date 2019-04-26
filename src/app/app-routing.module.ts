import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'tv', loadChildren: './tv/tv.module#TvPageModule' },
  { path: 'cel', loadChildren: './cel/cel.module#CelPageModule' },
  { path: 'laptop', loadChildren: './laptop/laptop.module#LaptopPageModule' },
  { path: 'pc', loadChildren: './pc/pc.module#PcPageModule' },
  { path: 'form/:id', loadChildren: './form/form.module#FormPageModule' },
  { path: 'rta/:name/:lastName/:Documento/:Direccion/:Telefono/:Ciudad/:id', loadChildren: './rta/rta.module#RtaPageModule' },
];




@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
