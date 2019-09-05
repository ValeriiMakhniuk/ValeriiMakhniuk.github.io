const accItem = document.getElementsByClassName('team__accordeon-item');
const accLink = document.getElementsByClassName('team__username');

for (let i = 0; i < accLink.length; i++) {
  accLink[i].addEventListener('click', (e) => {
    e.preventDefault();
    let itemClass = accLink[i].parentNode.className;
    for (let i = 0; i < accItem.length; i++) {
      accItem[i].className = 'team__accordeon-item';
    }
    if (itemClass != 'team__accordeon-item team__accordeon-item-active') {
      accLink[i].parentNode.className = 'team__accordeon-item team__accordeon-item-active';
    }
    else {
      accLink[i].parentNode.className = 'team__accordeon-item';
    }
  });
}