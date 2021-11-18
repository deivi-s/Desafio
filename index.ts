class Moneda {
    constructor(public valor: number, public simbolo: string,  public abreviatura: string) {
    }
}

class Cotizador {

    /* Cambio divisas Pesos a Dolar */
    constructor(public tipoCambioDolar: number, public simbolo: string) {
    }

    convertirDivisas(valor: number): number {
        if (!typeof (valor)) return 0;
        return valor * this.tipoCambioDolar;
    }


}

//////////////////////////////////////////////////


    let moneda: Moneda = new Moneda( 0.00997,'$', 'ARG',);

    

    let valorPesos: number = 9000;
    //let valorPesos: number = 0;
    let resultado: number = 0;
    let cotizar: Cotizador = new Cotizador(moneda.valor, moneda.simbolo);

    function Convertir() {
        //valorPesos = parseFloat((<HTMLInputElement>document.getElementById('value')).value);
        resultado = parseFloat(cotizar.convertirDivisas(valorPesos)?.toFixed(2));
        console.log(`El monto en ${moneda.abreviatura} ${moneda.simbolo} es : `, resultado.toString());
    }

    Convertir();






