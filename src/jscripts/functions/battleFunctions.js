export function shuffle(array) {
  let our_array = Array.from(array)
  let shuffled_array = []

  for(let i = 0 ; i < array.length ; i++){
    let random_index = Math.floor(Math.random() * our_array.length )
    shuffled_array.push(...our_array.splice(random_index , 1))
  }

  return shuffled_array
}