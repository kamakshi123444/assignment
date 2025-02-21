function kgToLbs(kilograms) {
    const pounds = kilograms * 2.20462; // 1 kg = 2.20462 lbs
    return pounds;
  }
  

  const kilograms = 5;
  const pounds = kgToLbs(kilograms);
  console.log(`${kilograms} kg is equal to ${pounds.toFixed(2)} lbs`);