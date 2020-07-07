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

//For of
for (let user of listOfUsers) {
    console.log("Name:",user.name)
    console.log(" Lastname:",user.lastName)
}