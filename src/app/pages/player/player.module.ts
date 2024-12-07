import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PlayerComponent } from './player.component';
import { LeftPainelComponent } from '../../components/left-painel/left-painel.component';

@NgModule({
  declarations: [
    PlayerComponent,
    LeftPainelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
