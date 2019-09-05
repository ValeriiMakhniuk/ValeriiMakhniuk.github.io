let btn = document.getElementsByClassName('reviews__review-btn');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        e.preventDefault();
        document.body.classList.add('stop-scroll');
        let overlay = document.createElement('div');
        overlay.classList.add('overlay');
        let container = document.createElement('div');
        container.classList.add('reviews__popup');
        let header = document.createElement('h3');
        header.classList.add('reviews__popup-header');
        header.textContent = document.getElementsByClassName('reviews__review-title')[0].textContent;
        let text = document.createElement('p');
        text.textContent = document.getElementsByClassName('reviews__review-txt')[0].textContent;
        let toggle = document.createElement('a');
        toggle.classList.add('reviews__popup-toggle');
        toggle.setAttribute('href', '#');
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove('stop-scroll');
            document.body.removeChild(overlay);
        })
        container.appendChild(header);
        container.appendChild(text);
        container.appendChild(toggle);
        overlay.appendChild(container);
        document.body.appendChild(overlay);
    });
}