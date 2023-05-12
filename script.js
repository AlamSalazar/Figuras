triangulo = document.getElementById("tria");
cuadrado = document.getElementById("cuad");
pentagono = document.getElementById("pent");
hexagono = document.getElementById("hexa");
circulo = document.getElementById("circ");

window.onload = function () {
    miBody = document.getElementsByTagName("body");
    miBody[0].setAttribute("class", "fondo");
};

triangulo.onmousedown = function () {
    document.getElementById("cual").innerHTML = "TR&IacuteANGULO";
    document.getElementById("calculoA").innerHTML = "<h4>altura: <input type='text' id='altura'/> </h4><h4>base: <input type='text' id='base'/> </h4> <h4 id='cal'></h4> <button id='btn1' class='btn'><h2>Calcular<br>&Aacuterea</h2></button><h2 id='resultado1' class='result'></h2>";
    document.getElementById("calculoD").innerHTML = "<h4>lado 1: <input type='text' id='lado1'/> </h4><h4>lado 2: <input type='text' id='lado2'/> </h4> <h4>lado 3: <input type='text' id='lado3'/> </h4> <button id='btn2' class='btn'><h2>Calcular<br>Per&iacutemetro</h2></button><h2 id='resultado2' class='result'></h2>";
    var h,b,l1,l2,l3,A,p;
    document.getElementById("btn1").onclick = function () {
        h = parseFloat(document.getElementById("altura").value);
        b = parseFloat(document.getElementById("base").value);
        if (!isNaN(h) && !isNaN(b)){
            A = (b*h)/2;
            document.getElementById("resultado1").innerHTML = "&Aacuterea: "+A.toFixed(2);
        }else{alert("Introduce los datos")}
    }
    document.getElementById("btn2").onclick = function () {
        l1 = parseFloat(document.getElementById("lado1").value);
        l2 = parseFloat(document.getElementById("lado2").value);
        l3 = parseFloat(document.getElementById("lado3").value);
        if (!isNaN(l1)&& !isNaN(l2)&& !isNaN(l3)){
            p = l1 + l2 + l3
            document.getElementById("resultado2").innerHTML = "Per&iacutemetro: "+p.toFixed(2);
        }else{alert("Introduce los datos")}
    }
}
     
cuadrado.onmousedown = function () {
    document.getElementById("cual").innerHTML = "CUADRADO (o rect&aacutengulo)";
    document.getElementById("calculoA").innerHTML = "<h4>altura: <input type='text' id='altura'/> </h4><h4>base: <input type='text' id='base'/> </h4> <h4 id='cal'></h4> <button id='btn1' class='btn'><h2>Calcular</h2></button><h2 id='resultado1' class='result'></h2>";
    document.getElementById("calculoD").innerHTML = "";
    var h,b,A,p;
    document.getElementById("btn1").onclick = function () {
        h = parseFloat(document.getElementById("altura").value);
        b = parseFloat(document.getElementById("base").value);
        if (!isNaN(h) && !isNaN(b)){
            A = b*h;
            p = (b*2)+(h*2);
            document.getElementById("resultado1").innerHTML = "&Aacuterea: "+A.toFixed(2) + "<br>Per&iacutemetro: " + p.toFixed(2);
        }else{alert("Introduce los datos")}
    }
}

pentagono.onmousedown = function () {
    document.getElementById("cual").innerHTML = "PENT&AacuteGONO";
    document.getElementById("calculoA").innerHTML = "<h4>apotema: <input type='text' id='apotema'/> </h4><h4>lado: <input type='text' id='lado'/> </h4>  <button id='btn1' class='btn'><h2>Calcular</h2></button><h2 id='resultado1' class='result'></h2>";
    document.getElementById("calculoD").innerHTML = "";
    var a,l,A,p;
    document.getElementById("btn1").onclick = function () {
        a = parseFloat(document.getElementById("apotema").value);
        l = parseFloat(document.getElementById("lado").value);
        if (!isNaN(a) && !isNaN(l)){
            A = (l*a)*(5/2);
            p = l*5;
            document.getElementById("resultado1").innerHTML = "&Aacuterea: "+A.toFixed(2) + "<br>Per&iacutemetro: " + p.toFixed(2);
        }else{alert("Introduce los datos")}
    }
}
hexagono.onmousedown = function () {
    document.getElementById("cual").innerHTML = "HEX&AacuteGONO"
    document.getElementById("calculoA").innerHTML = "<h4>apotema: <input type='text' id='apotema'/> </h4><h4>lado: <input type='text' id='lado'/> </h4>  <button id='btn1' class='btn'><h2>Calcular</h2></button><h2 id='resultado1' class='result'></h2>"
    document.getElementById("calculoD").innerHTML = ""
    var a,l,A,p;
    document.getElementById("btn1").onclick = function () {
        a = parseFloat(document.getElementById("apotema").value);
        l = parseFloat(document.getElementById("lado").value);
        if (!isNaN(a) && !isNaN(l)){
            p = l*6;
            A = (p*a)/2;
            document.getElementById("resultado1").innerHTML = "&Aacuterea: "+A.toFixed(2) + "<br>Per&iacutemetro: " + p.toFixed(2);
        }else{alert("Introduce los datos")}
    }
}
circulo.onmousedown = function () {
    
    document.getElementById("cual").innerHTML = "C&IacuteRCULO";
    document.getElementById("calculoA").innerHTML = "<h4>radio: <input type='text' id='radio'/> </h4> <button id='btn1' class='btn'><h2>Calcular</h2></button><h2 id='resultado1' class='result'></h2>";
    document.getElementById("calculoD").innerHTML = "";
    var r,A,p;
    document.getElementById("btn1").onclick = function () {
        r = parseFloat(document.getElementById("radio").value);
        if (!isNaN(r)){
            A = Math.PI * Math.pow(r,2);
            p = Math.PI*(2*r);
            document.getElementById("resultado1").innerHTML = "&Aacuterea: "+A.toFixed(2) + "<br>Per&iacutemetro: " + p.toFixed(2);
        }else{alert("Introduce los datos")}
    }
}

triangulo.onmouseover = function () {
    triangulo.setAttribute("src", "./images/trianguloF.png");}
triangulo.onmouseout = function () {
    triangulo.setAttribute("src", "./images/triangulo.png   ");}

cuadrado.onmouseover = function () {
    cuadrado.setAttribute("src", "./images/cuadradoF.png");}
cuadrado.onmouseout = function () {
    cuadrado.setAttribute("src", "./images/cuadrado.png");}

pentagono.onmouseover = function () {
    pentagono.setAttribute("src", "./images/pentagonoF.png");}
pentagono.onmouseout = function () {
    pentagono.setAttribute("src", "./images/pentagono.png");}

hexagono.onmouseover = function () {
    hexagono.setAttribute("src", "./images/hexagonoF.png");}
hexagono.onmouseout = function () {
    hexagono.setAttribute("src", "./images/hexagono.png");}

circulo.onmouseover = function () {
    circulo.setAttribute("src", "./images/circuloF.png");}
circulo.onmouseout = function () {
    circulo.setAttribute("src", "./images/circulo.png");}
