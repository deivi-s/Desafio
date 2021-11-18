var Moneda = /** @class */ (function () {
    function Moneda(valor, simbolo, abreviatura) {
        this.valor = valor;
        this.simbolo = simbolo;
        this.abreviatura = abreviatura;
    }
    return Moneda;
}());
var Cotizador = /** @class */ (function () {
    /* Cambio divisas Pesos a Dolar */
    function Cotizador(tipoCambioDolar, simbolo) {
        this.tipoCambioDolar = tipoCambioDolar;
        this.simbolo = simbolo;
    }
    Cotizador.prototype.convertirDivisas = function (valor) {
        if (!typeof (valor))
            return 0;
        return valor * this.tipoCambioDolar;
    };
    return Cotizador;
}());
//////////////////////////////////////////////////
var moneda = new Moneda(0.00997, '$', 'ARG');
var valorPesos = 9000;
var resultado = 0;
var cotizar = new Cotizador(moneda.valor, moneda.simbolo);
function Convertir() {
    var _a;
    //valorPesos = parseFloat((<HTMLInputElement>document.getElementById('value')).value);
    resultado = parseFloat((_a = cotizar.convertirDivisas(valorPesos)) === null || _a === void 0 ? void 0 : _a.toFixed(2));
    console.log("El monto en " + moneda.abreviatura + " " + moneda.simbolo + " es : ", resultado.toString());
}
Convertir();
