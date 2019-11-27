// para começar a definir uma requisição ajax e necessário criar um variável chamando XHMLHttpRequest
// e essa classe nos da acesso a requisição para recuperar alguma coisa 
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.github.com/users/brenodev');
xhr.send(null)
xhr.onreadystatechange = function(){
  if (xhr.readyState === 4) {
    
    console.log(JSON.parse(xhr.responseText))
  }
}