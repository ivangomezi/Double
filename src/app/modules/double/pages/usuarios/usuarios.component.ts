import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/core/services/users/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  ListUser: any[] = [];

  constructor(
    private ServiceUsers : UsersService,
    private url : ActivatedRoute
  ) { 
    const param = this.url.snapshot.params.id;
    //ejecular consulta user
    this.ServiceUsers.getUsersId(param).subscribe({
      next: data => {
        this.ListUser = [data];
      },
      error: error => {
        console.error(error.error)
      }
    });
  }

  ngOnInit(): void {
  }

}


export class User {
  avatar_url ?: string;
  name ?: string;

}