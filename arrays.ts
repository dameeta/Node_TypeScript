let myarray :number [] = [44,55,56,89,101,34,22];
let values : (string|number)[]=['abc',4,'pqr',6,7,'jjk'];

let values1: Array<string|number> =['abc',4,'pqr',6,7,'jjk'];

console.log(myarray[0],myarray[1],myarray[2]);
for(var i in myarray){
    console.log(myarray[i]);
}
for(var x=0;x< myarray.length;x++)
{
    console.log(myarray[x]);
}
for(var y=0;y< values.length;y++)
{
    console.log(values[y]);
}