/**
 * Created by Xuchen on 6/25/15.
 */
var createMask = function () {
    return document.body.appendChild(document.createElement("div"));
}

function buttonClick(){
    var txt = document.getElementById("buttonPop");
    txt.innerHTML = "23333333333333";
    var mask  = createMask();
    mask.show();
}

function calculate() {
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");

    //get input data from "input" tag
    //and then, some data transition code
    var principal = parseFloat(amount.value);
    var interest = parseFloat(apr.value)/100/12;
    var payment = parseFloat(years.value)*12;

    //now calculate data monthly
    var x = Math.pow(1+interest, payment);
    var monthly = (principal*x*interest)/(x-1);

    if(isFinite(monthly)){
        //fill calculated data into output position
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly*payment).toFixed(2);
        totalinterest.innerHTML = ((monthly*payment)-principal).toFixed(2);

        //save user data for possible next time use
        save(amount.value, apr.value, years.value, zipcode.value);

        //find possible sponsor and ignore network error
        try{
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        }
        catch(e){}

        //finally, use chart to show the data
        chart(principal, interest, monthly, payment);
    }
    else{
        payment.innerHTML = "";
        total.innerHTML = "";
        totalinterest.innerHTML = "";
        chart();
    }
}

function save(amount, apr, years, zipcode) {
    //run only when the browser supported
    if(window.localStorage){
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

//try to recover the input data when open again
window.onload = function () {
    if(window.localStorage && localStorage.loan_amount){
        document.getElementById("amount").value = localStorage.loan_amount;
        //..
        //..
        //..
    }
};

function getLenders(amount, apr, years, zipcode){
    //if the browser doesn't support, exit
    if(!window.XMLHttpRequest) return;

    //find "lenders" element in HTML
    //if null, exit
    var ad = document.getElementById("lenders");
    if(!ad) return;

    //encoding user input data and attach them into URL as parameters
    var url = "getLenders.php" +
            "?amt=" + encodeURIComponent(amount) +
            "&apr=" + encodeURIComponent(apr) +
            "&yrs" + encodeURIComponent(years) +
            "&zip" + encodeURIComponent(zipcode);

    //get return data using XMLHttpRequest object
    var req = new XMLHttpRequest();     //new a request
    req.open("GET", url);       //new a HTTP GET request using url
    req.send(null);     //send this request without any article

    //see book page:19
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            //if the code runs to here, that proves we get a compelete HTTP response
            var response = req.responseText;
            var lenders = JSON.parse(response);

            var list = "";
            for (var i=0; i<lenders.length; i++){
                list += "<li><a href='" + lenders[i].url + "'>" +
                    lenders[i].name + "</a>";
            }

            ad.innerHTML = "<ul>" + list + "</ul>";
        }
    }
}

function chart(principal, interest, monthly, payments){
    var graph = document.getElementById("graph");
    graph.width = graph.width;

    //if no parameter pasted or browser doesn't support, exit
    if(arguments.length == 0 || graph.getContext) return;

    var g = graph.getContext("2d");
    var width = graph.width;
    var height = graph.height;

    function paymentToPixel(n){
        return n*width/payments;
    }
    function amountToPixel(a){
        return height-(a*height/(monthly*payments*1.05));
    }

    g.moveTo(paymentToPixel(0),amountToPixel(0));
    g.lineTo(paymentToPixel(payments), amountToPixel(monthly*payments));
    g.lineTo(paymentToPixel(payments), amountToPixel(0));
    g.closePath();
    g.fillStyle = "#f88";
    g.fill();
    g.font = "bold 12px sans-serif";
    g.fillText("Total interest payment", 20, 20);

    var equity = 0;
    g.beginPath();
    g.moveTo(paymentToPixel(0),amountToPixel(0));
    for(var p=1; p<=payments; p++){
        var thisMonthInterest = (principal - equity)*interest;
        equity += (monthly - thisMonthInterest);
        g.lineTo(paymentToPixel(p), amountToPixel(equity));
    }
    g.lineTo(paymentToPixel(payments), amountToPixel(0));
    g.closePath();
    g.fillStyle = "green";
    g.fill();
    g.fillText("Total Equity", 20, 35);

    //var bal = principal;
    //g.beginPath();
    //g.moveTo(paymentToPixel(0), amountToPixel(bal));

}




















