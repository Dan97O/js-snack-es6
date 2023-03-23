/* 
Snack 1
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.
*/

//Crea un array composto da 10 automobili.
//Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
const automobili = [
  { 
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "benzina"
  },
  { 
    marca: "Renault",
    modello: "Clio",
    alimentazione: "diesel"
   },
  { 
    marca: "Toyota",
    modello: "Yaris", 
    alimentazione: "ibrida"
  },
  { 
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "benzina"
  },
  { 
    marca: "Opel", 
    modello: "Corsa", 
    alimentazione: "diesel" 
  },
  { 
    marca: "Tesla",
    modello: "Model 3",
    alimentazione: "elettrico"
  },
  {
    marca: "Peugeot",
    modello: "308",
    alimentazione: "benzina"
  },
  { 
    marca: "Audi",
    modello: "A4",
    alimentazione: "diesel"
  },
  { 
    marca: "Hyundai",
    modello: "Kona",
    alimentazione: "elettrico"
  },
  {
    marca: "Fiat",
    modello: "Tipo",
    alimentazione: "metano"
  },
];


//Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
const benzina = automobili.filter(auto => auto.alimentazione === "benzina");
const diesel = automobili.filter(auto => auto.alimentazione === "diesel");
const altreAuto = automobili.filter(auto => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel");


//Infine stampa separatamente i 3 array.
console.log(benzina, 'Auto a Benzina');
console.log(diesel, 'Auto Diesel');
console.log(altreAuto, 'Tutte le altre auto');