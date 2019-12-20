axios.get('https://api.github.com/users/brenogsouza')
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    })