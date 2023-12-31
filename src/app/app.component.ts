import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'locacao.UI';
  private router: Router;    
  private authService: AuthService; 

  constructor(    
    router: Router,
    authService: AuthService) 
  {    
    this.router = router;   
    this.authService = authService; 
  }

  isLoggedIn(): boolean{
    return this.authService.isLoggedIn();
  }

  sair() {    
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
