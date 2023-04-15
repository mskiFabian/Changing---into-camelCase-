function camelize(str) {
  let newString = str.split("-")
  newString = newString.map((word, index) => {
      if(index == 0) {
        return word.toLowerCase()
      } else {
        return word[0].toUpperCase() + word.slice(1)
      }
    })
  newString = newString.join("")
  return newString
}
console.log(camelize("Webkit-anime"))
console.log(camelize("my-dream-car"))