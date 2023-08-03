function sortDescending(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  const inputArray = [9, 3, 1, 6, 5, 88, -1, 2, 7];
  const sortedArray = sortDescending(inputArray);
  console.log("Arreglo ordenado descendente:", sortedArray);