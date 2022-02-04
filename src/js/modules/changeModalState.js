import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width'); //для валидации
    checkNumInputs('#height'); //для валидации

    function bindActionToElems(elem, eventType, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(eventType, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';

                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }

    bindActionToElems(windowForm, 'click', 'form'); //записываем значение формы окна в объект
    bindActionToElems(windowWidth, 'input', 'width');
    bindActionToElems(windowHeight, 'input', 'height');
    bindActionToElems(windowType, 'change', 'type'); //поддерживает событие change
    bindActionToElems(windowProfile, 'change', 'profile'); //поддерживает событие change
};

export default changeModalState;