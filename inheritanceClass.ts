class Shape{
    Area: number
    constructor(x:number)
    {
        this.Area=x;
    }

}
class Rectangle extends Shape{

    disp()  : void{
        console.log("Area of Rectangle is:" + this.Area);
    }
}
var shapeobj=new Rectangle(4);
shapeobj.disp();