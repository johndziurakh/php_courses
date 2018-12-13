document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.getElementsByClassName('menu-item');
    var imgItems = document.getElementsByClassName('img-item');

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', clickMenuItem);
    }

    for (var i = 0; i < imgItems.length; i++) {
        imgItems[i].addEventListener('click', showPopup);
    }

    var closeBtn = document.getElementById('close');

    closeBtn.addEventListener('click', closePopup);
});

function closePopup(event) {
    var popup = document.getElementById('popup');

    popup.style.display = 'none';
}

function showPopup(event) {
    var image = event.toElement;
    var src = image.getAttribute('src');
    var popup = document.getElementById('popup');
    var imgPopup = popup.getElementsByTagName('img');

    imgPopup[0].setAttribute('src', src);

    popup.style.display = 'block';
}

function clickMenuItem(event) {
    var menuItems = document.getElementsByClassName('menu-item');
    var element = event.toElement;

    for (var n = 0; n < element.classList.length; n++) {
        if (element.classList[n] === 'selected') {
            return false;
        }
    }

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove('selected');
    }

    element.classList.add('selected');

}
