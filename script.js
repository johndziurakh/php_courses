document.addEventListener('DOMContentLoaded', function () {
    var button = document.body.getElementsByClassName('btn');
    button[0].addEventListener('click', function () {
        var block = document.body.getElementsByClassName('test');

        block[0].style.color = 'blue';
    });
});
