require("./style.css");

var initMouseHelper = function () {
    var box = document.createElement('div');
    box.classList.add('mouse-helper');
    document.body.appendChild(box);

    document.addEventListener('mousemove', function (e) {
        box.style.left = e.pageX + 'px';
        box.style.top = e.pageY + 'px';
    });

    document.addEventListener('mousedown', function (e) {
        box.classList.add('mouse-helper-button-down');
    });

    document.addEventListener('mouseup', function (e) {
        box.classList.remove('mouse-helper-button-down');
    });
};

window.addEventListener("load", function () {
    if (document.body) {
        initMouseHelper();
    } else {
        setTimeout(function () {
            if (document.body) {
                initMouseHelper();
            }
        }, 100);
    }
});