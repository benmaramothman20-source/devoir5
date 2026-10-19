
import { Routes } from '@angular/router';
import { MakeupComponent } from './makeup/makeup';
import { AddMakeup } from './add-makeup/add-makeup';
import { UpdateMakeup } from './update-makeup/update-makeup';
import { RecherchePartype } from './recherche-partype/recherche-partype';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';

export const routes: Routes = [
  { path: 'makeup', component: MakeupComponent },
  { path: 'add-makeup', component: AddMakeup },
  { path: 'updateMakeup/:id', component: UpdateMakeup },
  { path: '', redirectTo: 'makeup', pathMatch: 'full' },
  {path: "recherchePartype", component : RecherchePartype},
  {path: "rechercheParNom", component : RechercheParNom}

];