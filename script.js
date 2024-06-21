document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const number = parseFloat(document.getElementById('number-input').value);
    if (isNaN(number)) {
        alert('Por favor, ingresa un número válido.');
        return;
    }

    const multiplyResult = (number * (6000000/150)).toLocaleString();
    const divideResult = (number / 150).toLocaleString();

    document.getElementById('multiply-result').textContent = `Costo aproximado del sistema $ ${multiplyResult}`;
    document.getElementById('divide-result').textContent = `Kilovatios pico ${divideResult}`;
});
