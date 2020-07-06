//Variables
// arrays
interface Alumns{
    name:string;
    age:number;
}

var listNames: Array<string> =["Juana","Maria","Ana","Carmen"]

var listNumbers: Array<number> =[15,25,36,695,95]

var listAlumns: Array<Alumns> = [
    {
        name: "Maria",
        age: 15
    },
    {
        name: "Ana",
        age: 95
    },
    {
        name: "Johana",
        age: 54
    }
]
console.log(listAlumns[2].name)