/**
 * Created by Xuchen on 7/13/15.
 */

//method 1:
var empty = {};

var point = {
    x:0,
    y:1
};

var point2 = {
    x:point.x,
    y:point.y+1
};

var book = {
    "main title": "JavaScript",
    'sub title': "the Definitive Guide",
    "for": "all audience",
    author: {
        firstname: "David",
        surname: "Flanagan"
    }
};


//method 2:
var o = new Object();
var a = new Array();
var d = new Date();
var r = new RegExp("js");


//method 3:
var o1 = Object.create(null);
var o2 = Object.create({x:1,y:2});


//
//check property
//
var o = {
    x:1
};

//method 1
o.hasOwnProperty("x");  //true
o.hasOwnProperty("y");  //false
//method 2
o.x !== undefined;  //false
o.y !== undefined;  //true



//
//list property
//
var p = {
    x:1,
    y:2,
    z:3
};
for(index in p)
    console.log(index);

//jump method
for(index in p){
    if(typeof p[index] === "function")
        continue;
}


//
//getter & setter
//
var p = {
    x: 1.0,
    y: 2.0,

    get r(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    },

    set r(newValue){
        this.x = newValue;
        this.y = newValue;
    }
}



























