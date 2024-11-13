// Funkcja do generowania wyniku
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

// Funkcja do przełączania motywów
function toggleTheme() {
     const body = document.body;

     if (body.classList.contains('dark-mode')) {
         body.classList.remove('dark-mode');
         body.classList.add('light-mode');
         localStorage.setItem('theme', 'light'); // Zapisz wybór w localStorage
         document.getElementById('themeToggle').checked = false;

     } else {
         body.classList.remove('light-mode');
         body.classList.add('dark-mode');
         localStorage.setItem('theme', 'dark'); // Zapisz wybór w localStorage
         document.getElementById('themeToggle').checked = true;

     }
}

// Ładowanie motywu z localStorage po załadowaniu strony
window.onload = function() {
   const savedTheme = localStorage.getItem('theme') || 'dark'; // Domyślnie ustaw ciemny motyw

   if (savedTheme === 'dark') {
       document.body.classList.add('dark-mode');
       document.getElementById('themeToggle').checked = true;

   } else {
       document.body.classList.add('light-mode');
       document.getElementById('themeToggle').checked = false;

   }

   // Dodaj nasłuchiwacz zdarzeń do przełącznika motywu
   document.getElementById('themeToggle').addEventListener('change', toggleTheme);
};
