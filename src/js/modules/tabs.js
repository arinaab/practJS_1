const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const tabsParent = document.querySelector(headerSelector),
          tabsContent = document.querySelectorAll(contentSelector),
          tabs = document.querySelectorAll(tabSelector);
    
    function hideContent() {
        tabsContent.forEach(item => item.style.display = 'none');
        tabs.forEach(tab => tab.classList.remove(activeClass));
    }

    function showContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideContent();
    showContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && (target.classList.contains(tabSelector.replace(/\./, '')) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, '')))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });

};

export default tabs;