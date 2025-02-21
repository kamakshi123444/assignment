function parseCSV(csvString) {
    const rows = csvString.split(";"); 
    
    return rows.map(row => {
        const [name, age, role] = row.split(",");
        return { name, age: Number(age), role };
    });
}


const input = "John,25,Developer;Sarah,30,Designer";
console.log(parseCSV(input));