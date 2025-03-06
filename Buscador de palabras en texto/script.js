function searchWord() {
    const sentence = document.getElementById('centencia').value.trim();
    const wordInput = document.getElementById('palabra').value.trim();
    const resultDiv = document.getElementById('resultado');
  
    const cleanWord = wordInput.replace(/[^\w]/g, '').toLowerCase();
    const words = sentence.split(/\s+/).map(word => {
        return word.replace(/[^\w]/g, '').toLowerCase();
    });
    
    const positions = [];
    words.forEach((word, index) => {
        if (word === cleanWord) {
            positions.push(index + 0); 
        }
    });

    if (positions.length === 0) {
        resultDiv.innerHTML = `La palabra "${wordInput}" no fue encontrada`;
    } else {
        resultDiv.innerHTML = `La palabra "${wordInput}" se encontró en las posiciones: ${positions.join(', ')}`;
    }
}