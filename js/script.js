$(document).ready( function() {

          // --------------------------- #1 -------------------------

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// var studente = {
//   "nome" : 'Dennis',
//   "cognome": 'Olimpio',
//   "eta": 26,
//   "nazionalità" : 'italiana',
//
// }
//
// for (var key in studente) {
//
//   console.log(key + ": " +  studente[key])
//
// }

          // --------------------------- #2 -------------------------

// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// var gruppoStudenti = [
//
//   {
//     "nome": 'Carmine',
//     "cognome": 'Raia',
//     "eta": 25,
//   },
//     {
//       "nome": 'Luca',
//       "cognome": 'Amuro',
//       "eta": 27,
//     },
//
//     {
//       "nome": 'Dennis',
//       "cognome": 'Olimpio',
//       "eta": 26,
//     },
//
//     {
//       "nome": 'Pinco',
//       "cognome": 'Pallino',
//       "eta": 6,
//     },
// ]


// for (var i = 0; i < gruppoStudenti.length; i++) {
//   var studente = gruppoStudenti[i]
//
//   for ( var key in studente) {
//     console.log( key + ": " +  studente[key]);
//   }
//
// }

          // --------------------------- #3 -------------------------

// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// var nomeUtente = prompt( "inserisci nome")
// var cognomeUtente = prompt( "inserisci cognome")
// var etaUtente = prompt( "inserisci eta")
//
//
//
//
//
// var gruppoStudenti = [
//
//   {
//     "nome": 'Carmine',
//     "cognome": 'Raia',
//     "eta": 25,
//   },
//     {
//       "nome": 'Luca',
//       "cognome": 'Amuro',
//       "eta": 27,
//     },
//
//     {
//       "nome": 'Dennis',
//       "cognome": 'Olimpio',
//       "eta": 26,
//     },
//
//     {
//       "nome": nomeUtente,
//       "cognome": cognomeUtente,
//       "eta": etaUtente,
//     },
// ]
//
//
// for (var i = 0; i < gruppoStudenti.length; i++) {
//   var studente = gruppoStudenti[i]
//
//   for ( var key in studente) {
//     console.log( key + ": " +  studente[key]);
//   }
//
// }


});


// fine $(document).ready..
