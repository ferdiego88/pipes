import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  capitan = 'Capitán América';
  tony = 'TONY STARK';
  diego = 'fErNanDo dIEgo sAntILlAN vAraS';
  fernando = 'Fernando Santillan';
  arreglo = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.562;
  moneda = 8500;
  videoUrl = 'https://www.youtube.com/embed/dlHEbuhfjYo';
  promesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegó la data');
    }, 4500);
  });
  fecha = new Date();
  // fechaMoment = moment();
  idioma = 'fr';
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      piso: 20
    }
  };
}
