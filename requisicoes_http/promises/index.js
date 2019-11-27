/*Promises são códigos que não influenciam na linha do tempo do javascript e não precisamos nos preocuparmos no retorn */
var minhaPromise = function() {
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/brenodev' );
    xhr.send(null);

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 ) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject ('Erro na requisição')
        }
      }
    }
  }); 
}
minhaPromise()
.then(function(response){
  console.log(response)
})
.catch(function(error){
  console.warn(error)
})