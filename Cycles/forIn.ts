interface User{
    name:string,
    lastName:string
}

var listOfUsers:Array<User> = [
    {
        name: "Ana",
        lastName: "Carcamo"
    },
    {
        name: "Lupita",
        lastName: "Jaurez"
    },
    {
        name: "Elmer",
        lastName: "Martinez"
    }
]

for (let position in listOfUsers) {
    console.log(listOfUsers[position].name)
}