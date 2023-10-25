var calendario = document.getElementById("calendario");
var fecha = Date();
var lista = [];

lista = fecha.split(" ");
dia = lista[1];
mes = lista[2];
anio = lista[3];
calendario.innerHTML = "<div id='anio'>" + anio + "</div>" + 
                        "<div id='dia'>" + dia + "</div>"+ 
                        "<div id='mes'>" + mes + "</div>";
