function generateResult() {
    const color = document.getElementById('color').value;
    const material = document.getElementById('material').value;
    const furniture = document.getElementById('furniture').value;

    const result = `Mebel: ${furniture} Kolor: ${color} Materiał: ${material}`;
    
    document.getElementById('result').innerText = result;
}
