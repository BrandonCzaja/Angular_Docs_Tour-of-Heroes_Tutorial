import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';

// Configuring routes - This tells the router what component to render for the given url path
const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },
];

// Listener for browser location changes
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
