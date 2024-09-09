import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SentComponent } from './sent/sent.component';
import { PqrsComponent } from './pqrs/pqrs.component';

const routes: Routes = [
  {
    path: '',
    component: PqrsComponent
  },
  {
    path: 'sent/:pqrId',
    component: SentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
