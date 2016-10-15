window.addEventListener("load", cargarPagina);
	
	var contenedorPadre = document.getElementById("contenedorPadre");
    var contenedor = document.getElementById("contenedor");
    var lista = document.getElementById("lista");
    var formulario = document.getElementById("formulario");
    var input = document.getElementById("input");
    var btnGuardar = document.getElementById("btnGuardar");

    function cargarPagina(){
    	lista.addEventListener("click", aparecerLista);
    	btnGuardar.addEventListener("click", agregarTarjeta);
    }

    function aparecerLista(){
    	lista.classList.add("none");
        formulario.classList.remove("none");
    }

    function agregarTarjeta(e){
    	e.preventDefault();
    	formulario.classList.add("none");

    	var padre = this.parentElement.parentElement;

        var contenedorLista = document.createElement("div");
    	var textoInput = document.createElement("div");
        var linkTarjeta = document.createElement("div");

        textoInput.textContent = input.value;
        linkTarjeta.innerText = "Añadir una tarjeta";

        input.value = "";

        textoInput.classList.add("titulo-lista");
        linkTarjeta.classList.add("link-tarjeta");

        contenedorPadre.appendChild(contenedorLista);
        padre.appendChild(linkTarjeta);
        padre.insertBefore(textoInput, padre.children[0]);

        contenedorLista.insertBefore(lista, contenedorLista.children[0]);
        contenedorLista.insertBefore(formulario, contenedorLista.children[1]);

        
    }