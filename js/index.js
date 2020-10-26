const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);


window.addEventListener('load', event => {
  memoryGame.shuffleCards()
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
    document.querySelector('#memory-board').innerHTML = html;
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        card.querySelectorAll('.card div').forEach(div =>{
          div.classList.toggle("front")
          div.classList.toggle("back")
        })
        memoryGame.pickedCards.push(card)
        if(memoryGame.pickedCards.length === 2){
          let carta1 = memoryGame.pickedCards[0].getAttribute("data-card-name");
          let carta2 = memoryGame.pickedCards[1].getAttribute("data-card-name");
          if (memoryGame.checkIfPair(carta1, carta2)){
              memoryGame.pickedCards[0].style.visibility = "hidden"
              memoryGame.pickedCards[1].style.visibility = "hidden"
            let pairsGuessedText = document.getElementById("pairs-guessed")
            pairsGuessedText.innerHTML++;
            let pairsClickedText= document.getElementById("pairs-clicked") ;
            pairsClickedText.innerHTML++
            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);
            //memoryGame.pickedCards =[];
          }else if (!memoryGame.checkIfPair(carta1, carta2)){
            let pairsClickedText= document.getElementById("pairs-clicked") ;
            pairsClickedText.innerHTML++
            memoryGame.pickedCards.forEach(div =>{
              div.querySelectorAll(".card div").forEach(div =>{
                div.classList.toggle("front")
                div.classList.toggle("back")
              })
            })
            memoryGame.pickedCards.splice(0, memoryGame.pickedCards.length);
            }
          }
        let cardName = card.getAttribute("data-card-name");
        console.log(`Card clicked: ${cardName}`);
        if(memoryGame.isFinished()){
          setTimeout(() => {
            alert("You win!");
          }, 1000);
        }
      });
    });
  })
