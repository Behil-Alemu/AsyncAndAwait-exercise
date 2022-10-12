favNum = 7
async function favNumber(){
    let res = await $.getJSON(`http://numbersapi.com/${favNum}?json`);
    console.log(res)
}

favNumber()


async function multiNumber() {
    let p1Promise =  await $.getJSON(`http://numbersapi.com/1..3,10`);
    console.log(p1Promise);
  }
  
  multiNumber();

async function fourFactNumber(){
    let facts = await Promise.all(
    Array.from( {length:4 }, ()=>
         $.getJSON(`http://numbersapi.com/${favNum}?json`))
    )
    facts.forEach(res =>{
        $("ul").append(`<li>${res.text}</li>`)
    })
}

fourFactNumber()