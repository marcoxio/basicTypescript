//Variables
// interfaces
interface Personas{
    nombre:string,
    apellido:string,
    edad:number,
    peso:number
}

var persona1: Personas={
    nombre: "Carmen",
    apellido: "Najera",
    edad: 16,
    peso: 250
}

console.log(persona1.nombre)