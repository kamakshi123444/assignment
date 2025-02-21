function kilometersToMiles(kilometers) {
    const conversionFactor = 0.621371;
    return kilometers * conversionFactor;
  }
  const kilometers = 10;
  const miles = kilometersToMiles(kilometers);
  console.log(`${kilometers} kilometers is equal to ${miles.toFixed(2)} miles.`);
  