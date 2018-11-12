import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './containers/book-form/book-form.component';

const routes: Routes = [
  { path: '', component: BookFormComponent },
  { path: ':id', component: BookFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookFormRoutingModule { }
