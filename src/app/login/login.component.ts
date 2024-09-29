import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LoginService } from './login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  helper = new JwtHelperService();
  login: string = '';

  constructor(
    private usuarioService: LoginService    ,
    private toastr: ToastrService,
    private router: Router,
  ) { }

  error: boolean = false

  ngOnInit() {
  }

  onLogInUsuario(usuario: string, contrasena: string) {
    this.error = false

    this.login=this.usuarioService.userLogIn(usuario, contrasena)

    if (this.login == 'Acceso exitoso'){
      this.showSuccess()
      this.router.navigate(['/crearPQRs'])
    }
    else{
      this.showError(this.login);
    }

  }

  showSuccess() {
    this.toastr.success(`Se ha registrado exitosamente`, "Registro exitoso");
  }
  
  showError(error: string) {
    this.toastr.error(error, "Error")
  }


}
