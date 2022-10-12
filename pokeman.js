 let baseURL = "https://pokeapi.co/api/v2/pokemon";
async function namesAndURLs(){
    let res = await $.getJSON(`${baseURL}`);
    console.log(res.results)
}
namesAndURLs()


// async function randomThree(){
//     let res = await $.getJSON(`${baseURL}/?limit=100`);
//     let randomPokemonPromises = [];
//     for (let i = 1; i < 5; i++){
//         let randomIdx = Math.floor(Math.random() * 100);
//         console.log(randomIdx)
//         randomPokemonPromises.push(res.results[randomIdx].url)
//         console.log(randomPokemonPromises)
//         }
// }
// randomThree()


async function part2() {
    let allData = await $.getJSON(`${baseURL}/?limit=100`);
    let randomPokemonUrls = [];
    for (let i = 0; i < 3; i++) {
      let randomIdx = Math.floor(Math.random() * allData.results.length);
      let url = allData.results.splice(randomIdx, 1)[0].url;
      randomPokemonUrls.push(url);
    }
    let pokemonData = await Promise.all(
      randomPokemonUrls.map(url => $.getJSON(url))
    );
    pokemonData.forEach(p => console.log(p));
  }

  part2()