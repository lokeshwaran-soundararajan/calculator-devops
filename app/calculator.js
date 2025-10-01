let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        // Basic validation to prevent code injection
        if (/^[0-9+\-*/.() ]+$/.test(display.value)) {
            display.value = eval(display.value);
        } else {
            display.value = 'Error';
        }
    } catch (error) {
        display.value = 'Error';
    }
}

// Export functions for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculate };
}