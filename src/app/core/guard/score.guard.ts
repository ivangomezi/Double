import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import Swal from 'sweetalert2'
import { UsersService } from '../services/users/users.service';

@Injectable({
  providedIn: 'root'
})
export class ScoreGuard implements CanActivate {

  constructor(
    private UserService : UsersService,
    private router : Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let aut = new Subject<boolean>();
    let param = localStorage.getItem("username");

    if (param == null){//Validar estado username autenticado
      aut.next(false);
      aut.complete();
      this.router.navigate((['/app/users/']));
      Swal.fire(
        {
          position: 'top-end',
          title: '¡Permiso denegado!',
          text: 'No tiene autorización de ver este perfil.',
          icon: 'error',
          showConfirmButton: false,
          timer: 3000,
          toast: true
        }
      )
    }
    else {
      this.UserService.getUsers(param).subscribe(data => { //Validar score mayor a 30.0 para autorización
        if(data.items[0].score < 30.0){
          aut.next(true);
          aut.complete();
          Swal.fire(
            {
              position: 'top-end',
              title: '¡Permiso concedido!',
              icon: 'success',
              showConfirmButton: false,
              timer: 3000,
              toast: true
            }
          )
        }
        else {
          aut.next(false);
          aut.complete();
          this.router.navigate((['/app/users/']));
          Swal.fire(
            {
              position: 'top-end',
              title: '¡Permiso denegado!',
              text: 'No tiene autorización de ver este perfil.',
              icon: 'error',
              showConfirmButton: false,
              timer: 3000,
              toast: true
            }
          )
        }
      },
      error => {
        aut.next(false);
        aut.complete();
        this.router.navigate((['/app/users/']));
        Swal.fire(
          {
            position: 'top-end',
            title: '¡Permiso denegado!',
            text: 'No tiene autorización de ver este perfil.',
            icon: 'error',
            showConfirmButton: false,
            timer: 3000,
            toast: true
          }
        )
      });
    }

    return aut.asObservable();
  }
  
}
