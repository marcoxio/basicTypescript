var listOfUsers = [
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
];
//For of
for (var _i = 0, listOfUsers_1 = listOfUsers; _i < listOfUsers_1.length; _i++) {
    var user = listOfUsers_1[_i];
    console.log("Name:", user.name);
    console.log(" Lastname:", user.lastName);
}
