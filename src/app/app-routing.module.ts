import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgentsComponent } from './components/agents/agents.component';
import { WeaponsComponent } from './components/weapons/weapons.component';
import { MapsComponent } from './components/maps/maps.component';
import { TiersComponent } from './components/tiers/tiers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agents', component: AgentsComponent },
  { path: 'weapons', component: WeaponsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'tiers', component: TiersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
