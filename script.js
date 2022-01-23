//SE DEJAN COMENTADAS LAS LINEAS DE DOCUMENT QUE SE REEMPLAZARON POR JQUERY

$(document).ready(function () {

    //let nombre = document.getElementById("nombreUsuario");
    let nombre = $("#nombreUsuario").val();
    //let edad = document.getElementById("edadUsuario");
    let edad = $("#edadUsuario").val();
    //let peso = document.getElementById("pesoUsuario");
    let peso = $("#pesoUsuario").val();
    //let altura =document.getElementById("alturaUsuario");
    let altura = $("#alturaUsuario").val();
    //let mensaje = document.getElementById("mensaje");
    let email = $("#correoUsuario").val();

    console.log("nombre:" + nombre);
    console.log("peso:" + peso);

    //clase con el integrante familiar con un metodo incluido que devuelve su imc

    class integranteFamiliar {

        constructor(nombre, edad, peso, altura) {
            this.nombre = nombre;
            this.edad = edad;
            this.peso = peso;
            this.altura = altura
        }

        calculoimc() {
            let imc = this.peso / (this.altura * this.altura);
            return imc;
        }
    }

    //registro de todo el grupo familiar

    let grupoFamiliar = [];

    //let validar = document.getElementById("validar");

    //validar.addEventListener("click" , obtenerDatos);


    $("#validar").click(function (e) {
        //function obtenerDatos (e){
        e.preventDefault();
        const persona = new integranteFamiliar($("#nombreUsuario").val(), $("#edadUsuario").val(), $("#pesoUsuario").val(), $("#alturaUsuario").val())
        grupoFamiliar.push(persona);
        let persona1JSON = JSON.stringify(grupoFamiliar);
        localStorage.setItem("nombre", persona1JSON);



        console.log(grupoFamiliar);
        console.log(persona1JSON);



        //bucle donde evalua el imc de cada integrante del grupo familiar
        for (let integrante of grupoFamiliar) {



            if (integrante.calculoimc() < 18) {
                console.log(integrante.nombre + " Ud. esta padeciendo un grado de desnutrición");
                console.log("Su IMC es de: " + integrante.calculoimc().toFixed(2));
                $("#advertencia").append(`<h6>ATENCION!</h6>
                                  <h6>El IMC debe considerarse como una guia aproximada pues puede no corresponder al mismo grado de gordura en diferentes individuos.</h6>
                                  <h6>El IMC no puede predecir el riesgo para su salud por sí mismo, pero la mayoría de los expertos indica que un índice superior a 30 (obesidad) no es saludable. Sin importar cuál sea su IMC, el ejercicio puede ayudarle a reducir el riesgo de enfermedad del corazón y diabetes.</h6>
                                  <h6>SIEMPRE DEBE CONSULTAR PREVIAMENTE A SU MEDICO DE CABECERA ANTES DE INICIAR UN PROGRAMA DE EJERCICIOS Y/O DIETA</h6>
                                  
       `);
                
                let parrafo = document.createElement("p");
                parrafo.innerHTML = (integrante.nombre + " Ud. esta padeciendo un grado de desnutrición. Su IMC es de: " + integrante.calculoimc().toFixed(2));
                mensaje.appendChild(parrafo);
            } else if (integrante.calculoimc() >= 18 && integrante.calculoimc() <= 25) {
                console.log(integrante.nombre +  " Su peso es normal.");
                console.log("Su IMC es de: " + integrante.calculoimc().toFixed(2));
                $("#advertencia").append(`<h6>ATENCION!</h6>
                                  <h6>El IMC debe considerarse como una guia aproximada pues puede no corresponder al mismo grado de gordura en diferentes individuos.</h6>
                                  <h6>El IMC no puede predecir el riesgo para su salud por sí mismo, pero la mayoría de los expertos indica que un índice superior a 30 (obesidad) no es saludable. Sin importar cuál sea su IMC, el ejercicio puede ayudarle a reducir el riesgo de enfermedad del corazón y diabetes.</h6>
                                  <h6>SIEMPRE DEBE CONSULTAR PREVIAMENTE A SU MEDICO DE CABECERA ANTES DE INICIAR UN PROGRAMA DE EJERCICIOS Y/O DIETA</h6>
                                  
       `);
                let parrafo = document.createElement("p");
                parrafo.innerHTML = (integrante.nombre +  " Su peso es normal.Su IMC es de: " + integrante.calculoimc().toFixed(2));
                mensaje.appendChild(parrafo);
            } else if (integrante.calculoimc() > 25 && integrante.calculoimc() < 30) {
                console.log(integrante.nombre + " Ud. padece Sobrepeso");
                console.log("Su IMC es de: " + integrante.calculoimc().toFixed(2));
                $("#advertencia").append(`<h6>ATENCION!</h6>
                                  <h6>El IMC debe considerarse como una guia aproximada pues puede no corresponder al mismo grado de gordura en diferentes individuos.</h6>
                                  <h6>El IMC no puede predecir el riesgo para su salud por sí mismo, pero la mayoría de los expertos indica que un índice superior a 30 (obesidad) no es saludable. Sin importar cuál sea su IMC, el ejercicio puede ayudarle a reducir el riesgo de enfermedad del corazón y diabetes.</h6>
                                  <h6>SIEMPRE DEBE CONSULTAR PREVIAMENTE A SU MEDICO DE CABECERA ANTES DE INICIAR UN PROGRAMA DE EJERCICIOS Y/O DIETA</h6>
                                  
       `);
                let parrafo = document.createElement("p");
                parrafo.innerHTML = (integrante.nombre  +  " Ud. padece Sobrepeso.Su IMC es de: " + integrante.calculoimc().toFixed(2));
                mensaje.appendChild(parrafo);
            } else if (integrante.calculoimc() > 30 && integrante.calculoimc() <= 40) {
                console.log(integrante.nombre + " Ud. padece un grado de obesidad");
                console.log("Su IMC es de: " + integrante.calculoimc().toFixed(2));
                $("#advertencia").append(`<h6>ATENCION!</h6>
                                  <h6>El IMC debe considerarse como una guia aproximada pues puede no corresponder al mismo grado de gordura en diferentes individuos.</h6>
                                  <h6>El IMC no puede predecir el riesgo para su salud por sí mismo, pero la mayoría de los expertos indica que un índice superior a 30 (obesidad) no es saludable. Sin importar cuál sea su IMC, el ejercicio puede ayudarle a reducir el riesgo de enfermedad del corazón y diabetes.</h6>
                                  <h6>SIEMPRE DEBE CONSULTAR PREVIAMENTE A SU MEDICO DE CABECERA ANTES DE INICIAR UN PROGRAMA DE EJERCICIOS Y/O DIETA</h6>
                                  
       `);
                let parrafo = document.createElement("p");
                parrafo.innerHTML = (integrante.nombre  +  " Ud. padece un grado de obesidad.Su IMC es de: " + integrante.calculoimc().toFixed(2));
                mensaje.appendChild(parrafo);
            } else {
                console.log(integrante.nombre + " Ud. padece un cuadro de obesidad severo");
                console.log("Su IMC es de: " + integrante.calculoimc().toFixed(2));
                $("#advertencia").append(`<h6>ATENCION!</h6>
                                  <h6>El IMC debe considerarse como una guia aproximada pues puede no corresponder al mismo grado de gordura en diferentes individuos.</h6>
                                  <h6>El IMC no puede predecir el riesgo para su salud por sí mismo, pero la mayoría de los expertos indica que un índice superior a 30 (obesidad) no es saludable. Sin importar cuál sea su IMC, el ejercicio puede ayudarle a reducir el riesgo de enfermedad del corazón y diabetes.</h6>
                                  <h6>SIEMPRE DEBE CONSULTAR PREVIAMENTE A SU MEDICO DE CABECERA ANTES DE INICIAR UN PROGRAMA DE EJERCICIOS Y/O DIETA</h6>
                                  
       `);
                let parrafo = document.createElement("p");
                parrafo.innerHTML = (integrante.nombre  +  " Ud. padece un cuadro de obesidad severo.Su IMC es de: " + integrante.calculoimc().toFixed(2));
                mensaje.appendChild(parrafo);
            }
        }

        //muestro boton mostrar datos cargados con jquery

        $("#mostrar").show();

        //aplico metodo post mediante ajax para simular envios de datos cargados

       let Apiurl = "https://jsonplaceholder.typicode.com/posts";
       
       let infoPost = {
                       title: $("#nombreUsuario").val(),
                       body: $("#edadUsuario").val(),
                       userId: $("#correoUsuario").val(),
       }
        console.log("datos a postear", infoPost);

      $("#divcontactar").show();
   
      $("#consultar").click(function (e) {
       e.preventDefault();
       $.ajax({
           method: "POST",
           dataType: 'json',
           url: Apiurl,
           data: infoPost,
           success: function (respuesta) {

            alert("Sus datos fueron enviados exitosamente!")
               console.log(respuesta);
           },
           error:function(error){
            alert("Algo salió mal cuando intentamos enviar sus datos, intentelo más tarde");
               console.log(error)
           }

       });
     });  


    })


    //SE  UTIIZA JQUERY: METODO "CLICK" COMO CAPTURA DE EVENTO Y SE INCORPORA METODO "APPEND" PARA INCORPORAR ELEMENTOS AL DOM (CON PREVIA DECLARACION DE METODO "READY")

    $("#mostrar").click(function (e) {


        e.preventDefault();


        let cargados = JSON.parse(localStorage.getItem("nombre"));


        for (let nombres of cargados) {

            console.log("El nombre del Usuario evaluado es:" + nombres.nombre);
            console.log("Su edad es:" + nombres.edad);
            console.log("Su altura es de :" + nombres.altura);
            console.log("Y su peso es de:" + nombres.peso);


            $("#mensaje").append(`<p>Sus Datos ingresados:</p>
                                  <p>Nombre: ${nombres.nombre}</p>
                                  <p>Edad: ${nombres.edad}</p>
                                  <p>Altura: ${nombres.altura}</p>
                                  <p>Peso: ${nombres.peso}</p>
       `);

        }

        //aplico modificacion de ccs y uso de animacion jquery
        
        $("#mensaje").slideDown(6000);
        $("#mensaje").slideUp(6000);
        $("#mensaje").css("background-color", "orange");

       
    })

});