const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'), //для очистки инпутов
          phoneInputs = document.querySelectorAll('input[name="user_phone"]'); //для валидации

    phoneInputs.forEach(item => { 
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        
        let res = await fetch(url, {
            method: 'POST',
            body: data,
        });

        return await res.text(); //text, т.к. серверный файл возвращает текстовые данные
    };

    const clearInputs = () => {
        inputs.forEach(item => item.value = '');
    };

    form.forEach(item => {
        item.addEventListener('submit', (event) => {
            event.preventDefault(); //отменяем перезагрузку

            //создаем блок для показа сообщения
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);
            //собираем данные каждой формы в формдату
            const formData = new FormData(item);
            //если данные нужны в формате json
            // const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch( () => statusMessage.textContent = message.failure)
                .finally( () => {
                    clearInputs();
                    setTimeout( () => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;