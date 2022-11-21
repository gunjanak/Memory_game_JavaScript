const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },


    {
        name: 'fries',
        img: 'images/fries.png',
    },

    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },

]

console.log(cardArray)
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray.length)
const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChoosenIds = []
const cardsWon = []
console.log(gridDisplay)

function createBoard() {
    for (let i=0; i<cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',filpCard)
        gridDisplay.appendChild(card)
       
    }

}
createBoard()

function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChoosenIds[0]
    const optionTwoId = cardsChoosenIds[1]
    console.log('Check for a match')
    if(optionOneId == optionTwoId) {
        alert("You have clicked the same image")
    }

    console.log(cardsChoosenIds[0])
    if(cardsChosen[0] == cardsChosen[1]){
        alert("You found a match")
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cards[optionOneId].removeEventListener('click',filpCard)
        cards[optionTwoId].removeEventListener('click',filpCard)
        cardsWon.push(cardsChosen)

    }
    else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry try again')

    }
    cardsChosen = []
    cardsChoosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }


}




function filpCard() {
    const cardId = this.getAttribute('data-id')
    
    cardsChoosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChoosenIds)

    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src',cardArray[cardId].img)
   
    if (cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}