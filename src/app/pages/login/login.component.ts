import { Component, OnInit } from '@angular/core';
import { LoginModule } from './login.module';
import { SportifyService } from '../../services/sportify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly sportifyService: SportifyService,
    private readonly router: Router
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
      this.router.navigate(['/player']);
    }
  }

}
