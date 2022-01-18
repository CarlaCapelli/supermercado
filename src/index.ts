console.log( "Supermercado Dia");
console.log("Azucar Ledesma");
console.log("Yerba Rosamonte");
console.log("Arroz Gallo");
console.log("Shampoo Pantene");
console.log("Pure Marolio");

//MERCADO DE PRODUCTOS EN STOCK

let supermercado: string="Supermercado Dia";
let prod1: string ="Azucar Ledesma";
let prod2 : string ="Yerba Rosamonte";
let prod3: string ="Arroz Gallo 500g";
let prod4: string ="Shampoo Pantene 170 ml";
let prod5 : string="Pure Marolio 400g";

let precioProd1: number=100;
let precioProd2: number=250;
let precioProd3: number=170;
let precioProd4:number = 290;
let precioProd5: number =120;

let stockProd1:number = 860;
let stockProd2:number=680;
let stockProd3:number= 760;
let stockProd4:number=430;
let stockProd5:number=540;

let compra:number;
let stockRest:number;

console.log(supermercado);
console.log(prod1 + " $" + precioProd1);
console.log(prod2 + " $" + precioProd2);
console.log(prod3 + " $" + precioProd3);
console.log(prod4 + " $" + precioProd4);
console.log(prod5 + " $" + precioProd5);

compra = precioProd1 + precioProd3;
console.log(compra);

stockRest =stockProd1-1;
console.log(stockRest);

stockRest = stockProd3 -1;
console.log(stockRest);

