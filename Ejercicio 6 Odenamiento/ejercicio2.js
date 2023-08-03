function sortCharactersByAscii(arr) {
    return arr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  }
  
  const inputArray = ['b', 'h', 'w', 'e', 'a'];
  const sortedArray = sortCharactersByAscii(inputArray);
  console.log("Arreglo de caracteres ordenado por ASCII:", sortedArray);
  