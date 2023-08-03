function sortWordsByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
  }
  
  const inputArray = ["adios", "hola", "maximo", "uno", "despedida"];
  const sortedArray = sortWordsByLength(inputArray);
  console.log("Palabras ordenadas por longitud:", sortedArray);
  