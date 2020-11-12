var minhaPromise = function(){
    return(
        new Promise(
            function(resolve, reject){
                //Classe para funcionalidade do AJAX
                var xhr = new XMLHttpRequest();

                xhr.open("GET", "https://api.github.com/users/pmatos2000");
                xhr.send(null);

                xhr.onreadystatechange = function(){
                    if(xhr.readyState === 4){ //Requisição terminou
                        if(xhr.status === 200){ //Sucesso
                            resolve(JSON.parse(xhr.responseText));
                        }
                        else{
                            reject("Erro na requisição");
                        }
                    }
                }
            }
        )
    );
};

minhaPromise()
    .then(
        function(response){
            console.log(response);
        }
    )
    .catch(
        function(error){
            console.log(error);
        }
    )

