module.exports = function() {
    if (!document.body) {
        console.log("Failed to create mouse helper, document.body not ready");
        return false;
    }
    var box = document.querySelector('.mouse-helper');
    if (!box) {
        var css = require("./style.css");
        var style = document.createElement("style");
        style.setAttribute("type", "text/css");
        style.setAttribute("context", "mouse-helper");
        style.innerHTML = css;
        document.head.appendChild(style);
        box = document.createElement('div');
        box.className = 'mouse-helper';
        document.body.appendChild(box);
    }
    if (!box.mouseHelper) {
        document.addEventListener('mousemove', function(e) {
            box.style.left = e.pageX + 'px';
            box.style.top = e.pageY + 'px';
        });
        document.addEventListener('mousedown', function() {
            box.classList.add('mouse-helper-button-down');
        });
        document.addEventListener('mouseup', function() {
            box.classList.remove('mouse-helper-button-down');
        });
        box.mouseHelper = true;
    }
    return true;
};