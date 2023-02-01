async function traerInfo() {
  let resultado = await fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => data);

  let name = resultado.results[0].name.title + " " + resultado.results[0].name.first + " " + resultado.results[0].name.last;
  console.log(name)

  document.getElementById("nombre").innerHTML = name;
  document.getElementById("email").innerHTML = resultado.results[0].email;
  document.getElementById("telefono").innerHTML = resultado.results[0].phone;
  document.getElementById("celular").innerHTML = resultado.results[0].cell;

  document.getElementById("pais").innerHTML = resultado.results[0].location.country;
  document.getElementById("ciudad").innerHTML = resultado.results[0].location.city;
  document.getElementById("estado").innerHTML = resultado.results[0].location.state;
  document.getElementById("calle").innerHTML = resultado.results[0].location.street.name;


  link = resultado.results[0].picture.large;

   document.getElementById("imagen").innerHTML = ` <img src="${link}" alt="No se pudo cargar"/>`; 

}

traerInfo();
