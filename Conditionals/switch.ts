var quantityNumberSend:number = 50;


switch(quantityNumberSend)
{
    case 25 : {
        console.log("twenty five")
        break;
    }
    case 20: {
        console.log("twenty")
        break;
    }
    case 15: {
        console.log("fifteen")
        break;
    }
    default : {
        console.log("Dont have expressions valid")
    }
}


enum typeMenu{
    songs = 1,
    albums = 2,
    profile = 3
}

//1  menu songs
//2  menu albums
//3  menu profile
var menu:number = 1

switch(menu)
{
    case typeMenu.songs: {
        console.log("Access songs")
        break;
    }
    case typeMenu.albums: {
        console.log("Access albums")
        break;
    }
    case typeMenu.profile: {
        console.log("Access profile")
        break;   
    }
    default:{
        console.log("menu dont exists")
    }
}