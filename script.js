let inputAdultos = document.querySelector("#adultos");
let inputCriancas = document.querySelector("#criancas");
let inputDuracao = document.querySelector("#duracao");

let resultado = document.querySelector("#resultado");

function calc(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let divResultado = document.querySelector("#resultado").style.display = "block";

    let meetTotal = meetPerson(duracao) * adultos + (400 / 2 * criancas);
    let beerTotal = beerPerson(duracao) * adultos;
    let drinkTotal = drinkPerson(duracao) * adultos + (400 / 2 * criancas);

    resultado.innerHTML = `<h3> Será necessário</h3>`
    resultado.innerHTML +=`<p class="meet">${Math.round(Math.ceil(meetTotal)/1000)} kg de carne</p>` 
    resultado.innerHTML += `<p class="beer">${Math.round(Math.ceil(beerTotal/355))} latas de cerveja</p>`
    resultado.innerHTML += `<p class="soda">${Math.round(Math.ceil(drinkTotal)/2000)} garrafas de bebida</p>`
}

function meetPerson(duracao){
    if(duracao >= 6){
        return 650;
    } else{
        return 400;
    }
}

function beerPerson(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function drinkPerson(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}