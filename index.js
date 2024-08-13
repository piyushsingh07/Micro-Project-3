document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const keys = document.querySelectorAll('.key');

    let currentValue = '0';

    function updateDisplay() {
        result.value = currentValue;
    }

    function handleNumber(num) {
        if (currentValue === '0') {
            currentValue = num;
        } else {
            currentValue += num;
        }
        updateDisplay();
    }

    function handleOperator(op) {
        currentValue += op;
        updateDisplay();
    }

    function handleDecimal() {
        if (!currentValue.includes('.')) {
            currentValue += '.';
            updateDisplay();
        }
    }

    function handleDelete() {
        currentValue = currentValue.slice(0, -1);
        if (currentValue === '') currentValue = '0';
        updateDisplay();
    }

    function handleReset() {
        currentValue = '0';
        updateDisplay();
    }

    function handleEquals() {
        try {
            currentValue = eval(currentValue.replace('x', '*')).toString();
            updateDisplay();
        } catch (error) {
            currentValue = 'Error';
            updateDisplay();
        }
    }

    keys.forEach(key => {
        key.addEventListener('click', () => {
            const value = key.textContent;
            
            if (value >= '0' && value <= '9') {
                handleNumber(value);
            } else if (['+', '-', '/', 'x'].includes(value)) {
                handleOperator(value);
            } else if (value === '.') {
                handleDecimal();
            } else if (value === 'DEL') {
                handleDelete();
            } else if (value === 'RESET') {
                handleReset();
            } else if (value === '=') {
                handleEquals();
            }
        });
    });
});