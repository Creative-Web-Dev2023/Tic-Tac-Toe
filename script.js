let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle'; // 'circle' beginnt das Spiel

function init() {
    render();
}

function render() {
    const contentDiv = document.getElementById('content');

    // Generate table HTML
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) { // die Zeilen
        tableHtml += '<tr>';  
        for (let j = 0; j < 3; j++) { // das jeweilige Feld
            const index = i * 3 + j; // jeweilige Zeile x3 + Spalte
            let symbol = '';    // leeres Feld
            if (fields[index] === 'circle') {
                symbol = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                symbol = generateCrossSVG();
            }
            tableHtml += `<td onclick="handleClick(${index})">${symbol}</td>`;
        }
        tableHtml += '</tr>'; // tr wird geschlossen
    }
    tableHtml += '</table>';
    contentDiv.innerHTML = tableHtml;
}

function handleClick(index) {
    if (fields[index] === null) { // Prüfen, ob das Feld leer ist
        fields[index] = currentPlayer; // Aktuellen Spieler setzen
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle'; // Spieler wechseln
        render(); // Tabelle neu rendern
    }
}

function generateCircleSVG() {
    return `
    <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="35" r="30" stroke="#e033d6" stroke-width="5" fill="none" stroke-dasharray="188.4" stroke-dashoffset="188.4">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 35 35" to="360 35 35" dur="125ms" repeatCount="1" />
            <animate attributeName="stroke-dashoffset" from="188.4" to="0" dur="125ms" fill="freeze" />
        </circle>
    </svg>`;
}

function generateCrossSVG() {
    return `
    <svg width="70" height="70" viewBox="0 0 70 70" xmlns="http://www.w3.org/2000/svg">
        <line x1="10" y1="10" x2="60" y2="60" stroke="#f4e7b6" stroke-width="5" stroke-dasharray="70" stroke-dashoffset="70">
            <animate attributeName="stroke-dashoffset" from="70" to="0" dur="125ms" fill="freeze" />
        </line>
        <line x1="60" y1="10" x2="10" y2="60" stroke="#f4e7b6" stroke-width="5" stroke-dasharray="70" stroke-dashoffset="70">
            <animate attributeName="stroke-dashoffset" from="70" to="0" dur="125ms" fill="freeze" />
        </line>
    </svg>`;
}
