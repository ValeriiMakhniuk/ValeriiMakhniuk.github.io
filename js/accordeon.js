const accordeon_item = document.getElementsByClassName('team__accordeon-item');

for (let i = 0; i < accordeon_item.length; i++) {
  accordeon_item[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (accordeon_item[i].classList.contains('team__accordeon-item-active')) {
      accordeon_item[i].classList.remove('team__accordeon-item-active');
    }
    else {
	  accordeon_item[i].classList.add('team__accordeon-item-active');
    }
  });
}