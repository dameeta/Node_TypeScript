var rainbowcolor;
(function (rainbowcolor) {
    rainbowcolor[rainbowcolor["Red"] = 1] = "Red";
    rainbowcolor[rainbowcolor["Orange"] = 8] = "Orange";
    rainbowcolor[rainbowcolor["Yellow"] = 9] = "Yellow";
    rainbowcolor[rainbowcolor["Green"] = 5] = "Green";
    rainbowcolor[rainbowcolor["Blue"] = 3] = "Blue";
    rainbowcolor[rainbowcolor["Grey"] = 2] = "Grey";
    rainbowcolor[rainbowcolor["Purple"] = 7] = "Purple";
})(rainbowcolor || (rainbowcolor = {}));
var col = rainbowcolor.Purple;
var colName = rainbowcolor[9];
console.log(col);
console.log(colName);
