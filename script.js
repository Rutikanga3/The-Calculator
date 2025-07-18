 const input =document.getElementById('display')
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                input.value = '';
            } else if (button.id === 'equal') {
                try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'Error';
                }
            } else {
                input.value += button.id;
            }
        });
    })
    function clearDisplay() {
        input.value = '';
    }
    function appendToDisplay(value) {
        input.value += value;
    }
    function calculateResult(){
        try {
                    input.value = eval(input.value);
                } catch {
                    input.value = 'Error';
                }
    }
