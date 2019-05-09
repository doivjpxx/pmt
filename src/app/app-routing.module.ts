import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { MinigameComponent } from './minigame/minigame.component';
import { FooterComponent } from './footer/footer.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'minigame', component: MinigameComponent},
  {path: 'dang-ky', component: FooterComponent},
  {path: 'chuong-trinh-khuyen-mai', component: PromotionsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
