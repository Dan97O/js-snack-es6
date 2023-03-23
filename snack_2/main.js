/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

*/

const arr1 = [
  'pippo',
  'PLUTO',
  'Paperino'
];

const arr2 = arr1.map(str => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`);

console.log(arr2);