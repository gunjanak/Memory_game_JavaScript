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

cardArray.sort(() => 0.5 - Math.random())
//console.log(cardArray.length)

let clickCount = 24
const gridDisplay = document.querySelector('#grid')
let resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChoosenIds = []
const cardsWon = []
let flag_won = 0

let countDisplay = document.querySelector('#clickLeft')
countDisplay.innerHTML = clickCount

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

    console.log(cardsChosen[0])
    console.log(cardsChoosenIds[0])
    
    if(optionOneId == optionTwoId) {
        alert("You have clicked the same image")
        
    }

    
    if((cardsChosen[0] == cardsChosen[1]) &&(optionOneId != optionTwoId) ){
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

    console.log(cardsChosen.length)
    cardsChosen = []
    cardsChoosenIds = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!'
        flag_won = 1
    }

    if (clickCount === 0  && flag_won === 0){
        alert('Time out')
        location.reload();
    }


}




function filpCard() {
    const cardId = this.getAttribute('data-id')
    console.log(cardId.length)
    clickCount = clickCount - cardId.length
    
    countDisplay.innerHTML = clickCount
    cardsChoosenIds.push(cardId)
    cardsChosen.push(cardArray[cardId].name)
   
    this.setAttribute('src',cardArray[cardId].img)

    if(clickCount === 1){
        alert('Last click remaining')
    }
    else if (clickCount === 0){
        alert('Time out')
        location.reload();
    }
   
    if (cardsChosen.length === 2){
        setTimeout(checkMatch,500)
    }
}