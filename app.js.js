/* Micro-desafío01 */
let peliculas = require('./proyecto/peliculas')

for (let i = 0; i < peliculas.length; i++) {
    console.log(peliculas[i])
}

/* Micro-desafío02 */
const fs = require('fs');

let mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8')

console.log(mensaje)