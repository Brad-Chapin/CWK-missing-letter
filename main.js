function findMissingLetter(array) {
  let alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  for (let i = 0; i < array.length; i++) {
    let cur = alpha.indexOf(array[i].toLowerCase());
    if (cur + 1 != alpha.indexOf(array[i + 1].toLowerCase())){
      if (array[0] == array[0].toUpperCase()) {
        return (alpha[cur +1].toUpperCase());
      } else {
        return (alpha[cur + 1]);
      }
    }
  }
}
