interface Father{
firstName:string,
lastName:string,
FullName: () =>string;
}

var Son : Father ={

    firstName : "Annie",
    lastName : "Robert",
    FullName : ():string => {return  "Hello !!"}
}

console.log("Son Objects");
console.log(Son.firstName);
console.log(Son.lastName);
console.log(Son.FullName());
