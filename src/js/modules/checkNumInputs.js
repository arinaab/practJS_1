const checkNumInputs = (inputsSelector) => {

    const numInputs = document.querySelectorAll(inputsSelector);
    numInputs.forEach(item => { 
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;