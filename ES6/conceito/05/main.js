function teste(x){
    let y = 2;
    if(x > 5){
        let y = 4; //Visivel somente no escorpo
        console.log(y);
    }
    console.log(y);
}

const x = 6;
// x = 2; //Vai dar erro

teste(x);