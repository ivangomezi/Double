import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Count = 0;
  Message = "Ninguna busqueda realizada";
  form!: FormGroup;
  ListUser: any[] = [];

  constructor(
    private router: Router,
    private fb:FormBuilder,
    private ServiceUsers : UsersService
  ) { 
    this.form = this.fb.group({
      userlogin: ['ivangomezi', [Validators.required, Validators.minLength(4), ]]
    });

    localStorage.removeItem("username");

    this.Search();
  }

  ngOnInit(): void {
  }

  Search() {
    if(this.form.status != "INVALID" && this.form.get('userlogin')?.value != "doublevpartners") {

      //ejecular consulta user
      this.ServiceUsers.getUsers(this.form.get('userlogin')?.value).subscribe({
        next: data => {
          if (data.total_count > 0) {
            this.ListUser = data.items
            this.Count = data.total_count
            this.Message = "Resultados encontrados";
          }
          else {
            //no se encontro resultados
            this.Message = "No se encontro resultados"
            this.ListUser = [];
          }
        },
        error: error => {
          console.error(error.error)
        }
      });

    }
    else {
      //ingrese un user a consultar
    }
  }
  
  Redirect(e:any) {
    let id = e.target.id;
    localStorage.setItem("username", id)
    this.router.navigate((['/app/user/', id]));
  }

}
