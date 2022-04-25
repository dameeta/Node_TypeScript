var Car = /** @class */ (function () {
    function Car(engine, model) {
        this.engine = engine;
        this.model = model;
    }
    Car.prototype.displayFeatures = function () {
        console.log("Engine is :" + this.engine);
        console.log("The model is:" + this.model);
    };
    return Car;
}());
var carobj = new Car("firstEngine", "BMW");
console.log(carobj.engine, carobj.model);
carobj.displayFeatures();
console.log(typeof (carobj));
var carobj1 = new Car("firstEngine", "BMW");
var carobj2 = new Car("firstEngine", "BMW");
