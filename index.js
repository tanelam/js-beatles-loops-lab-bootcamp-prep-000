function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for(let i = 0; i < musicians.length; i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  const arr = []
  let i = 0
  while(i < facts.length){
    arr.push(`${facts[i]}!!!`)
    i++
  }
  return arr
}

function iLoveTheBeatles(num){
  const arr = []

  do{
    arr.push("I love the Beatles!")
    num++
  } while (num < 15)

  return arr
}
