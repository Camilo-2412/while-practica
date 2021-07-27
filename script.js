    
    let texto = document.getElementById("texto");
    let textoCal = document.getElementById("textoCal");

    let btnDep = document.getElementById("btnDep");
    let btnCal = document.getElementById("btnCal");

    let departamentos = ["Amazonas" , "Antioquia" , "Atlántico" , "Arauca", "Bogotá" , "Bolívar" ,"Boyacá","Caldas","Caquetá","Casanare", "Cauca","Cesar","Chocó","Córdoba","Cundinamarca","Guainía","Guaviare","Huila", "La Guajira", "Magdalena" ,"Meta", "Nariño" ,"Norte de Santander","Putumayo","Quindío","Risaralda","San Andrés y Providencia","Santander", "Sucre","Tolima", "Valle del Cauca","Vaupés","Vichada"]

    const dep = () =>{
        let departamento = prompt("Ingrese un departamento de Colombia (5 para salir): ");
        while (!departamentos.includes(departamento)) {
            if(departamento==="5"){
                return "";
            }
            alert("Ingrese una opción valida");
            departamento = prompt("Ingrese un departamento de Colombia:");
        }
    
        if (departamento === "Amazonas") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Leticia. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Leticia_(Colombia)'>Leticia</a>";
        } else if (departamento === "Antioquia") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Medellin. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Medellín'>Medellín</a>";
        } else if (departamento === "Atlántico") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Barranquilla. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Barranquilla'>Barranquilla</a>";
        } else if (departamento === "Arauca") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Arauca. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Arauca_(Arauca)'>Arauca</a>";
        } else if (departamento === "Bogotá") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Bogotá. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Bogotá'>Bogotá</a>";
        } else if (departamento === "Bolívar") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Cartagena. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Cartagena_de_Indias'>Cartagena</a>";
        } else if (departamento === "Boyacá") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Tunja. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Tunja'>Tunja</a>";
        } else if (departamento === "Caldas") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Manizales. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Manizales'>Manizales</a>";
        } else if (departamento === "Caquetá") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Florencia. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Florencia_(Caquetá)'>Florencia</a>";
        } else if (departamento === "Casanare") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Yopal. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Yopal'>Yopal</a>";
        } else if (departamento === "Cauca") {
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Popayán. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Popayán'>Popayan</a>";
        }else if(departamento==="Cesar"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Valledupar. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Valledupar'>Valledupar</a>";
        }else if(departamento==="Chocó"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Quibdó. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Quibdó'>Quubdó</a>";
        }else if(departamento==="Córdoba"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Montería. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Montería'>Montería</a>";
        }else if(departamento==="Cundinamarca"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Bogotá. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Bogotá'>Bogotá</a>";
        }else if(departamento=== "Guainía"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Iníridia. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Inírida'>Iníridia</a>";
        }else if(departamento==="Guaviare"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es San José del Guaviare. <br> Para más información: <a href='https://es.wikipedia.org/wiki/San_José_del_Guaviare'>San José del Guaviare</a>";
    
        }else if(departamento==="Huila"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Neiva. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Neiva'>Neiva</a>";
        }else if(departamento==="La Guajira"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Riohacha. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Riohacha'>Riohacha</a>";
        }else if(departamento==="Magdalena"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Santa Marta. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)'>Santa Marta</a>";
        }else if(departamento==="Meta"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Villavicencio. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Villavicencio'>Villavicencio</a>";
        }else if(departamento==="Nariño"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Pasto. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Pasto_(Colombia)'>Pasto</a>";
        }else if(departamento==="Norte de Santander"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Cúcuta. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Cúcuta'>Cúcuta</a>";
        }else if(departamento==="Putumayo"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Mocoa. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Mocoa'>Mocoa</a>";
        }else if(departamento==="Quindío"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Armenia. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Armenia_(Quindío)'>Armenia</a>";
        }else if(departamento==="Risaralda"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Pereira. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Pereira'>Pereira</a>";
        }else  if(departamento==="San Andrés y Providencia"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es San Andrés. <br> Para más información: <a href='https://es.wikipedia.org/wiki/San_Andrés_(San_Andrés_y_Providencia)'>San Andrés</a>";
        }else if(departamento==="Santander"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Bucaramanga. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Bucaramanga'>Bucaramanga</a>";
        }else if(departamento==="Sucre"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Sincelejo. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Sincelejo'>Sincelejo</a>";
        }else if(departamento==="Tolima"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Ibagué. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Ibagué'>Ibagué</a>";
        }else if(departamento==="Valle del Cauca"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Cali. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Cali'>Cali</a>";
        }else if(departamento==="Vaupés"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Mitú. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Mitú'>Mitú</a>";
        }else if(departamento==="Vichada"){
            texto.innerHTML =
            "La capital de " +
            departamento +
            " es Puerto Carreño. <br> Para más información: <a href='https://es.wikipedia.org/wiki/Puerto_Carreño'>Puerto Carreño</a>";
        }else{
            texto.innerHTML =""
        }
    
    }
    

    const cal = () =>{
        let op =  prompt("Ingrese 1 para sumar, 2 para restar, 3 para multiplcar y 4 para multiplicar. (5 para salir)");

        while(op!=="1" && op!=="2" && op!=="3"  &&op!=="4"){
            if(op==="5"){
                return "";
            }
            alert("Ingrese una opción valida");
            op =  prompt("Ingrese 1 para sumar, 2 para restar, 3 para multiplcar y 4 para multiplicar. (5 para salir)");
        }

        if (op==="1") {
            let num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
            let num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));

            
            while(isNaN(num1) || isNaN(num2)){
                alert("Digite un numero correcto");
                num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
                num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            }
            let resultado = num1+num2;
            textoCal.innerHTML = num1 + " + " + num2 + " = " + resultado; 
        } else if(op==="2") {
            let num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
            let num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            while(isNaN(num1) || isNaN(num2)){
                alert("Digite un numero correcto");
                num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
                num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            }
            let resultado = num1-num2;
            textoCal.innerHTML = num1 + " - " + num2 + " = " + resultado;
        }else if(op==="3"){
            let num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
            let num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            while(isNaN(num1) || isNaN(num2)){
                alert("Digite un numero correcto");
                num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
                num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            }
            let resultado = num1*num2;
            textoCal.innerHTML = num1 + " * " + num2 + " = " + resultado;
        }else if(op==="4"){
            let num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
            let num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            while(isNaN(num1) || isNaN(num2)){
                alert("Digite un numero correcto");
                num1 = parseFloat(prompt("Ingrese el valor del primer numero: "));
                num2 = parseFloat(prompt("Ingrese el valor del segundo numero: "));
            }
            let resultado = num1/num2;
            textoCal.innerHTML = num1 + " / " + num2 + " = " + resultado;
        }else{

        }
    };



    btnDep.onclick = function(){
        dep();
    };

    btnCal.onclick = function (){
        cal();
    };