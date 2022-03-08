import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DoubleVPartners';
  ListUsers: any[] = [
    { "id": 0, "name": "prueba 1" },
    { "id": 1, "name": "prueba 2" },
    { "id": 2, "name": "prueba 3"}
  ];//lista de prueba
  constructor() {
  }
}
