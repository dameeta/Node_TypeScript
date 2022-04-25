class A{
    str:string;
    constructor(st:string)
    {
        this.str=st;
    }
    dowork():void{
        console.log("In A class");
    }
}
class B extends A{
    dowork(): void {
        super.dowork();
        console.log("in B class")
    }
}
class C extends B{}
var cobj=new C("xyz");
cobj.str="new name";
console.log(cobj.str);
var bobj=new B("data");
bobj.dowork();
