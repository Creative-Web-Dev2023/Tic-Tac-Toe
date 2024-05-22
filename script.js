let fields = [
    null,
    'circle',
    'cross',
    null,
    null,
    null,
    null,
    null,
    null,
];

function init() {
    render();
}

function render() {
    const contentDiv = document.getElementById('content');

    //Generate table Html
    let tableHtml = '<table>';
    for (let i = 0; i < 3; i++) { // die Zeilen
        tableHtml += '<tr>';  
        for (let j = 0; j < 3; j++) { // das jeweilige Feld
            const index = i * 3 + j; //jeweillige Zeile x3 + Spalte
            let symbol= '';    //leeres Feld
            if (fields[index] === 'circle') {
                symbol = '0';
            } else if (fields[index] === 'cross') {
                symbol = 'X';
            }
            tableHtml += `<td>${symbol}</td>`;
        }
        tableHtml += '</tr>'; // tr wird geschloßen
    }
    tableHtml += '</table>';
    contentDiv.innerHTML = tableHtml;
 }




