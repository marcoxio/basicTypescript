class Alumn{
    //By Default public
    private name:string;
    private lastName:string;
    private weight:number;

    // constructor()
    // {
    //     this.showMessage();
    // }

    showMessage() : void
    {
        console.log("Hello", this.name + " " + this.lastName)
    }

    signature(nameOfParameter:string,lasNameOfParameter:string,weightParameter:number){
        this.name = nameOfParameter;
        this.lastName = lasNameOfParameter;
        this.weight = weightParameter;
        this.showMessage();
    }
}

var alumn1 = new Alumn();
alumn1.signature("Juan","Garmendia",200)

// alumn1.showMessage();


var alumn2 = new Alumn();
alumn1.signature("Alejandro","Paz",200)

// alumn1.showMessage();