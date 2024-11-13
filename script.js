function generateResult() {
    const color = document.getElementById('color').value;
    const material = document.getElementById('material').value;
    const furniture = document.getElementById('furniture').value;

    const result = `Mebel: ${furniture}\nKolor: ${color}\nMateriał: ${material}`;
    
    // Ustawienie wyniku w polu tekstowym
    document.getElementById('result').value = result;
}

// Funkcja do kopiowania tekstu do schowka
function copyToClipboard() {
    const resultTextArea = document.getElementById('result');
    
    // Zaznacz tekst w polu
    resultTextArea.select();
    
    // Skopiuj zaznaczony tekst
    document.execCommand('copy');
    
    // Opcjonalnie, możesz dodać informację o skopiowaniu
    alert('Wynik skopiowany do schowka!');
}
