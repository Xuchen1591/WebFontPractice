/**
 * Created by Xuchen on 7/16/15.
 */
function draw(id){
    var canvas = document.getElementById(id);
    if(canvas == null)
        return false;
    var context = canvas.getContext('2d');
    context.fillStyle = "#ffeeef";


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
}