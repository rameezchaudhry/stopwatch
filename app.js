var min =0;
var sec = 0;
var milisec = 0;
var pau ;
function timer()
{
    ++milisec;
    var displaymili = document.getElementById("mili");
    displaymili.value=milisec;
    if(milisec === 100)
    { 
        milisec = 0;
        ++sec;  
        var displaysec = document.getElementById("sec");
        displaysec.value=Number( sec) ;
        console.log(sec)
        if(sec===60)
        {
            sec = 0;
            min++;  
            var displaymin = document.getElementById("min");
            displaymin.value=Number(min);
        }
        
    }
    
}
function start()
{   
    var a = document.getElementById("start").disabled = true;
    var b = document.getElementById("start");
    b.innerText= "Disabled";
    pau = setInterval(timer,10);
}
function pause()
{
    document.getElementById("start").disabled = false;
    var b = document.getElementById("start");
    b.innerText= "Start";
    clearInterval(pau);
}
function rest()
{
    document.getElementById("start").disabled = false;
    var b = document.getElementById("start");
    b.innerText= "Start";
    pause()
    window.location.href="index.html"

}