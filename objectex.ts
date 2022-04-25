class Car{

    engine:string;
    model:string;
    constructor(engine:string,model:string)
    {
        this.engine=engine;
        this.model=model;
    }

    displayFeatures() : void{
        console.log("Engine is :"+ this.engine);
        console.log("The model is:" + this.model);
    }
}
var carobj= new Car("firstEngine","BMW");
console.log(carobj.engine,carobj.model);
carobj.displayFeatures();
console.log(typeof(carobj));
var carobj1= new Car("firstEngine","BMW");
var carobj2= new Car("firstEngine","BMW");
