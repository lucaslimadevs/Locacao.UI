import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = "";
  public password: string = "";  
  private auth: AuthService;
  private router: Router;
  private toastr: ToastrService

  constructor( auth: AuthService, router: Router, toastr: ToastrService) 
  {
    this.auth = auth;
    this.router = router;
    this.toastr = toastr;
  }
  
  ngOnInit(): void {
    localStorage.clear();
  }

  login() {
    this.auth.login(this.username, this.password)
      .pipe(
        catchError((error) => {
          this.toastr.error('', 'Erro ao autenticar');
          return of(null);
        })
      )
      .subscribe((data: any) => {
        if (data && data.accessToken){
          this.auth.saveTokenInfo(data);          
          this.router.navigate(['/menu'])          
        }else{
          this.toastr.warning('', 'usuário ou senha incorretos');
        }
      }); 
  }
}
