function resultado() {
  let apart = document.getElementById("m2");
  let pisos = document.getElementById("piso");
  let ap = Number(apart.value);
  let piso = Number(pisos.value);
  let estilo = document.getElementsByName("marcador1");
  let aplic = document.getElementsByName("marcador2");
  let res = document.getElementById("resposta");
  let final = (ap * piso);
  let laminado = (ap * 30);
  let vinilico = (ap * 35);
  let porcelanato = (ap * 45);
  let normal = (final * 1.10)
  let escama = (final * 1.20)
 
  
  
 

  if (estilo[0].checked && aplic[0].checked) {
    res.innerHTML = `O valor do seu piso é de R$ ${laminado + normal}`;
  }else if(estilo[0].checked && aplic[1].checked){
    res.innerHTML = `O valor do seu piso é de R$ ${laminado + escama}`;
  }else if(estilo[1].checked && aplic[0].checked){
    res.innerHTML = `O valor do seu piso é de R$ ${vinilico + normal}`;
  }else if(estilo[1].checked && aplic[1].checked){
    res.innerHTML = `O valor do seu piso é de R$ ${vinilico + escama}`;
  }else if(estilo[2].checked && aplic[0].checked){
    res.innerHTML = `O valor do seu piso é de R$ ${porcelanato + normal}`;
  }else if(estilo[2].checked && aplic[1].checked){
    res.innerHTML = `Impossível instalar porcelanato em estilo escama.`;
  }else{
    res.innerHTML = ''
  }

}
//Calculadora

let modal = document.querySelector(".bloco");

function onOpen() {
  modal.classList.add("active");
}

function onClose() {
  modal.classList.remove("active");
}

function insert(num) {
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(
    0,
    resultado.length - 1
  );
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    window.alert("insira algum número!");
  }
}

// botãoflutuante
// Pausado pois site é curto!

/* window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 0) {
        document.getElementById("btn-open").style.display = "block";
    } else {
        document.getElementById("btn-open").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
*/
