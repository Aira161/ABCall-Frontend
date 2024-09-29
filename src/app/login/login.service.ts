import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private usuario = "vduarte"
  private password = "123456"
  private intento = 0

  userLogIn(usuario: string, contrasena: string): string {
    if (this.usuario == usuario){
      if (this.usuario == usuario && this.password == contrasena){
        return "Acceso exitoso"
      }
      this.intento ++
      if (this.intento == 3){
        return "Este es su tercer intento de inicio de sesión, se ha enviado un correo de intento de sesión"
      }
      if (this.intento > 3){
        return "Acceso denegado por tener muchos intentos"
      }
      return "Intento fallido número: "+this.intento
    }
    return "Usuario incorrecto"
    }


}
