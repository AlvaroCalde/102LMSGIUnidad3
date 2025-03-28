var titulo= document.getElementById("titulo")
var parrafo=document.getElementsByClassName("parrafo")
var cuerpo= document.getElementById("cuerpo")

titulo.innerText= "Nuevo título"
parrafo[0].innerText="Parrafo 1 modificado"
parrafo[1].innerText="Parrafo 2 modificado"
parrafo[2].innerText="Parrafo 3 modificado"

parrafo[0].outerHTML= "<div>Parrafo 1 modificado</div>"

cuerpo.style.backgroundColor="#f4f4f4"
cuerpo.style.textAlign="center"

titulo.style.color="#333"
titulo.style.marginBottom="15px"
titulo.style.textTransform="uppercase"
titulo.style.fontWeight="bold"

parrafo.style.width="18px"
parrafo.style.padding="10px"
parrafo[0].style.color="#e74c3c"

parrafo[1].style.color="#2ecc71"