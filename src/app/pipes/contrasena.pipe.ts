import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = false): string {
    /* Este es el codigo de Fernando Herrera
    Uso el operador Ternario
    */
    return (activar) ? '*'.repeat(value.length) : value;
    /* Este es mi codigo: Funciona*/
    // const expRegular = /\D/g;
    // if (activar) {
    //   value = value.replace(expRegular, '*');
    // }
    // return value;

  }

}
