import { Component, OnInit } from '@angular/core';
import { LoginModule } from './login.module';
import { SportifyService } from '../../services/sportify.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly sportifyService: SportifyService
  ){}

  public ngOnInit(): void {
    this.verificarTokenUrlCallback();
  }

  public openLoginPage() {
    window.location.href = this.sportifyService.obterUrlLogin();
  }

  public verificarTokenUrlCallback(){
    const token = this.sportifyService.obterTokenUrlCallback();
    if(!!token){
      this.sportifyService.definirAccessToken(token);
    }
  }

}
