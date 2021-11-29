console.log("script is geladen!");

const groentevak = document.getElementById('groente')
const fruitvak = document.getElementById('fruit')

function ZetinFruitla(fruit){
    console.log('fruit')

    const nieuweElement = document.createElement('h2')
    nieuweElement.innerHTML = fruit;
    fruitvak.appendChild(nieuweElement);
    nieuweElement.className = 'rood';
}

function ZetinGroentela(groente){
    console.log('groente')
}