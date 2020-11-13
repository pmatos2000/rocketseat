function checaIdade(idade) {
    // Retornar uma promise
    function funcPromise(resolve, reject){
        if(idade > 18){
            //Executa a função depois de 2s
            setTimeout(resolve, 2000);
        }
        else{
            setTimeout(reject, 2000);
        }
    }
    return (new Promise(funcPromise));
}


checaIdade(20)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    });

checaIdade(15)
    .then(function(){
        console.log("Maior que 18");
    })
    .catch(function(){
        console.log("Menor que 18");
    });