const setFechaActual=()=>{let e=new Date,t=("0"+e.getDate()).slice(-2),d=("0"+(e.getMonth()+1)).slice(-2);var n=e.getFullYear()+"-"+d+"-"+t;document.getElementById("fecha-input").value=n},generaPrimeraHabitacion=()=>{let e=document.createElement("div"),t=document.createElement("p");t.appendChild(document.createTextNode("Nueva Habitación")),t.setAttribute("class","text-center mt-4 text-success font-weight-bold"),e.appendChild(t);let d=document.createElement("div");d.setAttribute("class","row mt-1");let n=document.createElement("div");n.setAttribute("class","col-12"),d.appendChild(n);let l=document.createElement("label");l.appendChild(document.createTextNode("Adultos:")),l.setAttribute("class","ml-1"),n.appendChild(l);let o=document.createElement("select");o.setAttribute("class","float-right mr-1 select_adultos");for(let e=1;e<=4;e++){let t=document.createElement("option");t.appendChild(document.createTextNode(e)),2==e&&t.setAttribute("selected","selected"),o.appendChild(t)}n.appendChild(o);let a=document.createElement("div");a.setAttribute("class","row mt-3");let c=document.createElement("div");c.setAttribute("class","col-12"),a.appendChild(c);let i=document.createElement("label");i.setAttribute("class","ml-1"),i.appendChild(document.createTextNode("Niños:")),c.appendChild(i);let s=document.createElement("select");s.setAttribute("class","float-right mr-1 select_ninos");for(let e=0;e<=8;e++){let t=document.createElement("option");t.appendChild(document.createTextNode(e)),0==e&&t.setAttribute("selected","selected"),s.appendChild(t)}c.appendChild(s);let m=document.createElement("div");m.setAttribute("class","edades_ninos pl-1");let r=document.getElementById("div_room");r.appendChild(e),r.appendChild(d),r.appendChild(a),r.appendChild(m)},generaAddRoom=()=>{let e=document.createElement("div"),t=document.createElement("div");t.setAttribute("id","addRoom"),t.setAttribute("class","addRoom"),e.appendChild(t);let d=document.createElement("div"),n=document.createElement("span");n.appendChild(document.createTextNode("+")),t.appendChild(d),d.appendChild(n);let l=document.createElement("p");l.appendChild(document.createTextNode("AÑADIR\nHABITACIÓN")),l.setAttribute("class","text-center"),t.appendChild(l);let o=document.createElement("span");o.appendChild(document.createTextNode("HECHO")),o.setAttribute("id","done_boton"),e.appendChild(o),document.getElementById("div_addRoom").appendChild(e)},aplicarNumeroNoches=()=>{let e=document.getElementById("div_noches"),t=document.createElement("select");t.setAttribute("class","form-control"),t.setAttribute("id","dias-input");let d=document.createElement("option");d.setAttribute("disabled","disabled"),d.appendChild(document.createTextNode("Populares")),t.appendChild(d),[4,7,10,14].forEach(e=>{let d=document.createElement("option");d.appendChild(document.createTextNode(`${e} Noches`)),t.appendChild(d)});let n=document.createElement("option");n.setAttribute("disabled","disabled"),n.appendChild(document.createTextNode("Dias")),t.appendChild(n);for(let e=1;e<=20;e++){let d=document.createElement("option");e>1?d.appendChild(document.createTextNode(`${e} Noches`)):d.appendChild(document.createTextNode(`${e} Noche`)),t.appendChild(d)}e.appendChild(t)},aplicarSelectNinos=()=>{let e=document.getElementsByClassName("select_ninos");for(let t of e)t.addEventListener("change",()=>{let e=t.parentNode.parentNode.parentNode,d=parseInt(t.value),n=e.querySelector(".edades_ninos");for(;n.firstChild;)n.removeChild(n.firstChild);if(d>0){let e=document.createElement("h6");e.setAttribute("class","text-center mt-2"),e.appendChild(document.createTextNode("Edades (en la vuelta):")),n.appendChild(e)}for(let t=0;t<d;t++){let t=document.createElement("select");t.setAttribute("class","select_edad");let d=document.createElement("option");d.appendChild(document.createTextNode("Edad")),d.setAttribute("selected",""),d.setAttribute("disabled","disabled"),t.appendChild(d);for(let e=1;e<18;e++){let d=document.createElement("option"),n=document.createTextNode(e);d.appendChild(n),t.appendChild(d)}e.querySelector(".edades_ninos").appendChild(t)}})};setFechaActual(),generaPrimeraHabitacion(),generaAddRoom(),aplicarSelectNinos(),aplicarNumeroNoches();let huespedes_opciones=document.getElementById("huespedes_opciones"),huespedes_boton=document.getElementById("huespedes-input");huespedes_opciones.style.display="none",huespedes_boton.addEventListener("click",()=>{"flex"===huespedes_opciones.style.display?huespedes_opciones.style.display="none":huespedes_opciones.style.display="flex"});let div_addRoom=document.getElementById("addRoom");var numRooms=1;div_addRoom.addEventListener("click",()=>{if(numRooms<5){numRooms++;var e=document.getElementById("div_room").cloneNode(!0);let t=document.createElement("span");t.setAttribute("class","closeX"),t.appendChild(document.createTextNode("X")),t.addEventListener("click",()=>{t.parentNode.remove(),numRooms--}),e.insertBefore(t,e.firstChild);let d=e.querySelector(".edades_ninos");for(;d.firstChild;)d.removeChild(d.firstChild);huespedes_opciones.insertBefore(e,document.getElementById("div_addRoom")),div_addRoom.scrollIntoView(),aplicarSelectNinos()}else alert("Lo sentimos, solo se permite un máximo\n de 5 habitaciones por reserva")}),document.getElementById("done_boton").addEventListener("click",()=>{let e=document.getElementsByClassName("div_habitaciones"),t=e.length,d=0,n=0;for(let t of e)d+=parseInt(t.querySelector(".select_adultos").value),n+=parseInt(t.querySelector(".select_ninos").value);document.getElementById("numHabitaciones").innerHTML=t,document.getElementById("numAdultos").innerHTML=d,document.getElementById("numNinos").innerHTML=n,huespedes_opciones.style.display="none"}),document.getElementById("boton_buscar").addEventListener("click",()=>{let e=document.getElementById("texto-input").value,t=document.getElementById("fecha-input").value,d=document.getElementById("dias-input").value,n=document.getElementById("numHabitaciones").innerHTML,l=document.getElementById("numAdultos").innerHTML,o=document.getElementById("numNinos").innerHTML;new Reserva(e,t,d,n,l,o).mostrar()});