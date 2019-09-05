const accI = document.getElementsByClassName('menu__item');
const accL = document.getElementsByClassName('menu__item-title');

for (let i = 0; i < accL.length; i++) {
  accL[i].addEventListener('click', (e) => {
    e.preventDefault();
    let itemClass = accL[i].parentNode.className;
    for (let i = 0; i < accI.length; i++) {
      accI[i].className = 'menu__item';
    }
    if (itemClass != 'menu__item menu__item-active') {
      accL[i].parentNode.className = 'menu__item menu__item-active';
    }
    else {
        accL[i].parentNode.className = 'menu__item';
    }
  });
}