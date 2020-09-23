import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsListComponent } from './space-module/contact-details-list/contact-details-list.component';

const routes: Routes = [
  { path: 'contacts', component: ContactDetailsListComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
