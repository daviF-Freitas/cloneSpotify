import { Component } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-left-painel',
  standalone: false,
  templateUrl: './left-painel.component.html',
  styleUrl: './left-painel.component.scss'
})
export class LeftPainelComponent {

  //Icones
  public homeIcon = faHome;
  public searchIcon = faSearch;
  public artistaIcon = faGuitar;
  public playList = faMusic;

  public selectMenu = 'Home';

  public buttonClick(button: string): void {
    this.selectMenu = button;
  }
}
