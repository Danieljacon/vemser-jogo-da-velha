var vez = 1;
var vencedor = "";

function casasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("1.png") >= 0)
            vencedor = "1";
        else
            vencedor = "2";
        return true;
    }
    else{
        return false;
    }
}



