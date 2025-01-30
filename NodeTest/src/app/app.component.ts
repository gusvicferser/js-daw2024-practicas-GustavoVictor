import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gustavo Víctor';

  // Ejercicio 1:
  nombre: string = 'Gustavo';

  // Ejercicio 2:
  calcularAreaRectangulo(base: number, altura: number) {

    return base*altura;
  }
  
  ngOnInit() {
    console.log(`Area: ${this.calcularAreaRectangulo(5, 10)}`);
  }

}

export interface Persona {
  nombre: string;
  edad: number;
  correo: string
}
