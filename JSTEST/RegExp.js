/**
 * Created by Xuchen on 8/8/15.
 */
//RegExp
    //new reg exp end with "s"
var pattern1 = /s$/;
var pattern2 = new RegExp("s$");

//special char.s
// ^ $ . * + ? = ! : | \ / ( ) [ ] { }
//to ue them directly, use '\' before
    //any string include '\'
var pattern3 = /\\/;

//group
    //string include 'ab' or 'cd' or 'ef'
var patteern4 = /ab|cd|ef/;
    //3 digit number or 4 digit low case char
var pattern5 = /\d{3}|[a-z]{4}/;




//match methods
//1. search()
    //return start pos or -1
"javascript".search(/script/);

//2. replace()
text.replace(/javascript/,'JavaScript');

//3. match()
    //return an array includes all matched results
"1 plus 2 equals 3".match(/\d+/g);
    //end with 'g' represents match globally, find all matched results include sub RegExp
    //use '()' to divide sub groups
    //example
var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = "Visit my blog at http://www.example.com/~david"
var result = text.match(url);
if(result!=null){
    var fullurl = result[0];    //http:www.example.com/~david
    var protocol = result[1];   //http
    var host = result[2];   //www.example.com
    var path = result[4];   //~david
}

//4. split()
"123,456,789".split(',');   //['123','456','789'];















