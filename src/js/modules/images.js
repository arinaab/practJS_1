const images = () => {
    const workSection = document.querySelector('.works'),
          popupImg = document.createElement('div'),
          bigImg = document.createElement('img');

    popupImg.classList.add('popup_img');
    workSection.append(popupImg);
    popupImg.append(bigImg);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target && e.target.classList.contains('preview')) {
            popupImg.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (e.target.matches('div.popup_img')) {
            popupImg.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
};

export default images;