import { Component } from '@angular/core';
import { LoginModule } from './login.module';
import { SportifyService } from '../../services/sportify.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private readonly sportifyService: SportifyService
  ){}

  public openLoginPage() {
    window.location.href = this.sportifyService.obterUrlLogin();
  }

}
