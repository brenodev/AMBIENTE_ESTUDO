axios.get('https://api.github.com/users/brenodev')
  .then(function(response) {
    console.log(response)
  })
  .catch(function(error){
    console.log(error)
  })