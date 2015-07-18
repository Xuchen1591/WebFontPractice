/**
 * Created by Xuchen on 7/16/15.
 */
function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null)
        return false;
    var context = canvas.getContext('2d');
    //context.fillStyle = "#ffeeef";


    /*
    //rectangle
    context.fillRect(0,0,400,300);

    context.fillStyle = 'red';
    context.strokeStyle = 'blue';
    context.lineWidth = 2;
    context.fillRect(50,50,100,100);
    context.strokeRect(50,50,100,100);

    context.clearRect(60,60,80,90);



    //use path to draw a graphic
    //circle
    context.beginPath();
    context.arc(400,300,100,0,Math.PI*2,true);
    context.closePath();
    context.fillStyle = 'rgba(255,0,0,0.25)';
    context.fill();



    //draw lines
    //moveTo and lineTo
    var n = 0;
    var dx = 500;
    var dy = 600;
    var s = 100;
    context.beginPath();
    context.fillStyle = 'rgb(100,255,100)';
    context.strokeStyle = 'rgb(0,0,100)';
    var x = Math.sin(0);
    var y = Math.cos(0);
    var dig = Math.PI/15*11;
    for(var i=0;i<30;i++){
        var x = Math.sin(i*dig);
        var y = Math.cos(i*dig);
        context.lineTo(dx + x*s, dy + y*s);
    }
    context.closePath();
    context.fill();
    context.stroke();



    context.beginPath();
    context.fillStyle = 'rgb(100,255,100)';
    context.strokeStyle = 'rgb(0,0,100)';
    //context.moveTo(700,600);
    context.lineTo(900,600);
    context.closePath();
    context.fill();
    context.stroke();


    //test lineTo...
    //seems some problem
    context.fillStyle = 'rgb(100,255,100)';
    context.strokeStyle = 'rgb(0,0,100)';
    context.lineTo(700,600);
    context.closePath();
    context.fill();
    context.stroke();
     */


    //LinerGradient
    //context.createLinearGradient(xStart, yStart, xEnd, yEnd)
    //context.addColorStop(offset, color)
    var g1 = context.createLinearGradient(0,0,0,300);
    g1.addColorStop(0,'rgb(255,255,0)');
    g1.addColorStop(1,'rgb(0,255,255)');
    context.fillStyle = g1;
    context.fillRect(0,0,400,300);

    var g2 = context.createLinearGradient(0,0,300,0);
    g2.addColorStop(0,'rgba(0,0,255,0.5)');
    g2.addColorStop(1,'rgba(255,0,0,0.5)');
    for(var i=0;i<10;i++){
        context.beginPath();
        context.fillStyle = g2;
        context.arc(i*25,i*25,i*10,0,Math.PI*2,true);
        context.closePath();
        context.fill();
    }
}



















