function calculateDistanceFromOrigin(point) {
    const x = point[0];
    const y = point[1];
    return Math.sqrt(x * x + y * y);
  }
  
  function sortCoordinatesByDistance(arr) {
    return arr.sort((a, b) => calculateDistanceFromOrigin(a) - calculateDistanceFromOrigin(b));
  }
  
  const inputArray = [[7, 3], [2, 2], [1, 0], [4, 3]];
  const sortedArray = sortCoordinatesByDistance(inputArray);
  console.log("Arreglo de coordenadas ordenado por distancia:", sortedArray);
  