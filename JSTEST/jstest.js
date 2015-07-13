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