interface AlumnArray{
    namePerson: string;
    lastName: string;
}

var alumns:AlumnArray[] = [];

var ana: AlumnArray ={
    namePerson: "Ana",
    lastName:"Garmendia"
}

var carmen: AlumnArray ={
    namePerson: "Ana",
    lastName:"Garmendia"
}

alumns.push(ana)

console.log(alumns)