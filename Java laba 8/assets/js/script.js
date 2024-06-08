document.addEventListener('DOMContentLoaded', function() {
    const priceInput = document.getElementById('price');
    const errorDiv = document.getElementById('error');
    const priceOutput = document.getElementById('price-output');

    priceInput.addEventListener('focus', function() {
        priceInput.style.borderColor = 'green';
    });

    priceInput.addEventListener('blur', function() {
        const value = parseFloat(priceInput.value);

        if (isNaN(value) || value < 0) {
            priceInput.style.borderColor = 'red';
            errorDiv.textContent = 'Please enter correct price';
        } else {
            priceInput.style.borderColor = '';
            priceInput.style.color = 'green';
            errorDiv.textContent = '';

            // Create the price display span and remove button
            const priceDisplay = document.createElement('div');
            priceDisplay.className = 'price-display';
            priceDisplay.innerHTML = `<span>Текущая цена: ${value}</span><button>X</button>`;
            priceOutput.innerHTML = '';
            priceOutput.appendChild(priceDisplay);

            // Add event listener to remove button
            const removeButton = priceDisplay.querySelector('button');
            removeButton.addEventListener('click', function() {
                priceOutput.innerHTML = '';
                priceInput.value = '';
                priceInput.style.color = '';
            });
        }
    });
});
