import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  usuario:string='João Alves Da Silva Neto'
  email:string='joaoauvs@gmail.com'

  public appPages = [
    { title: 'Perfil', url: '/perfil', icon: 'person-circle' },
    { title: 'Salas', url: '/salas', icon: 'pricetag' },
    { title: 'Embarcados', url: '/embarcados', icon: 'hardware-chip' },
  ];
  public labels = ['Family'];
  constructor() {}
}
