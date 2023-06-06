import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';


  constructor() { }

  // O módulo calcular é do tipo number e tem três variáveis,
  //num1, num2 e operacao.
  // Dependendo do botão clicado, ele ativará um de seus switchs. 
  // Eles irão realizar suas respectivas operações com num1 e num2.
  // E por fim, irá retornar o valor da variável result 
  //(que é inicializada dentro do módulo).

   calcular(num1: number, num2: number, operacao: string): number{
    let resultado: number;

    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      default: resultado =  0;
    }
    return resultado
   }
}
