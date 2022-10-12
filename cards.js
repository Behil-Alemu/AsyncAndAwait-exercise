let url = 'https://deckofcardsapi.com/api/deck/new/draw/'
async function singleCard(){
    let res = await $.getJSON(`${url}`);
    console.log(`${res.cards[0].value } of ${res.cards[0].suit }`)
}
singleCard()


let urlShuffle = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
async function sameDeck(){
    let firstRes = await $.getJSON(`${url}`);
    let secondRes = await $.getJSON(`https://deckofcardsapi.com/api/deck/${firstRes.deck_id}/draw/`)
    console.log(`${firstRes.cards[0].value } of ${firstRes.cards[0].suit }`)
    console.log(`${secondRes.cards[0].value } of ${secondRes.cards[0].suit }`)
}
sameDeck()

baseURL="https://deckofcardsapi.com/api/deck/"
async function showcard(){
    let res = await $.getJSON(`${urlShuffle}`);
    let deckId = res.deck_id;
    let data = await $.getJSON(`${baseURL}/${deckId}/draw/`);
    $(".show").append(`<img src="${data.cards[0].image}"></img>`)
    
}
showcard()

//other ways to do it
// async function part2() {
//     let firstCardData = await $.getJSON(`${baseURL}/new/draw/`);
//     let deckId = firstCardData.deck_id;
//     let secondCardData = await $.getJSON(`${baseURL}/${deckId}/draw/`);
//     [firstCardData, secondCardData].forEach(card => {
//       let { suit, value } = card.cards[0];
//       console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//     });
//   }
// part2()
// async function setup() {
//     let $btn = $('button');
//     let $cardArea = $('#card-area');

//     let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
//     $btn.show().on('click', async function() {
//       let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
//       let cardSrc = cardData.cards[0].image;
//       let angle = Math.random() * 90 - 45;
//       let randomX = Math.random() * 40 - 20;
//       let randomY = Math.random() * 40 - 20;
//       $cardArea.append(
//         $('<img>', {
//           src: cardSrc,
//           css: {
//             transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//           }
//         })
//       );
//       if (cardData.remaining === 0) $btn.remove();
//     });
//   }
//   setup();
// });