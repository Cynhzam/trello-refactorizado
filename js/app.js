window.addEventListener("load", cargarPagina);
	
	var contenedorPadre = document.getElementById("contenedorPadre");
    var contenedor = document.getElementById("contenedor");
    var lista = document.getElementById("lista");
    var formulario = document.getElementById("formulario");
    var input = document.getElementById("input");
    var btnGuardar = document.getElementById("btnGuardar");

    function cargarPagina(){
    	lista.addEventListener("click", aparecerLista);
    }

    function aparecerLista(){
    	lista.classList.add("none");
        formulario.classList.remove("none");
    }