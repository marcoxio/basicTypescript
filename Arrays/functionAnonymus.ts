interface AlumnAnonymus{
    alumnId:number;
    namePerson:string;
    lastName:string;
}

var alumnsFunc: AlumnAnonymus[] = []

alumnsFunc.push({alumnId:1, namePerson:"Ana", lastName:"Pineda"});
alumnsFunc.push({alumnId:2, namePerson:"Carmen", lastName:"Najera"});
alumnsFunc.push({alumnId:3, namePerson:"Johana", lastName:"Pineda"});

var alumnFind = alumnsFunc.find((alumn) =>{
    return alumn.namePerson.includes("arme")
})

console.log(alumnFind)