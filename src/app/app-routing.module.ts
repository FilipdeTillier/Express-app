import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
    { path: 'main', loadChildren: './main/main.module#MainModule'},
    { path: 'book-form', loadChildren: './book-form/book-form.module#BookFormModule' },
    { path: 'favourite', loadChildren: './favourite/favourite.module#FavouriteModule' },
    { path: '**', redirectTo: '/main' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
  })
  export class AppRoutingModule { }
