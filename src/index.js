
const mouseNormal = require('./images/mouse-normal.svg');
const mouseDown = require('./images/mouse-down.svg');

//console.log(mouseNormal, mouseDown);

const defaultOption = {
    top: '0',
    left: '0',
    opacity: 0.8,
    className: 'mouse-helper-container'
};

module.exports = function(option) {
    if (!document.body) {
        console.log('Failed to create mouse helper, document.body not ready');
        return false;
    }
    const o = Object.assign(defaultOption, option);
    let container = document.querySelector(`.${o.className}`);
    if (container) {
        return true;
    }
    container = document.createElement('div');
    container.className = o.className;
    container.style.cssText = `top: ${o.top}; left: ${o.left}; opacity: ${o.opacity}; position: absolute; z-index: 99999; user-select: none; pointer-events: none;`;

    const imageDown = document.createElement('img');
    imageDown.src = mouseDown;
    imageDown.style.cssText = 'position: absolute; top: -10px; left: -10px; width: 20px; height: 20px; display: none;';
    container.appendChild(imageDown);

    const imageNormal = document.createElement('img');
    imageNormal.src = mouseNormal;
    imageNormal.style.cssText = 'position: absolute; top: 0; left: -3px; width: 20px; height: 20px; display: none;';
    container.appendChild(imageNormal);

    document.body.appendChild(container);

    let firstMoved;
    let requestId;
    document.addEventListener('mousemove', function(e) {

        if (!firstMoved) {
            firstMoved = true;
            imageNormal.style.display = 'block';
        }

        //throttle
        //console.log(requestId);
        window.cancelAnimationFrame(requestId);
        requestId = window.requestAnimationFrame(() => {
            //console.log(requestId, '-');
            container.style.left = `${e.pageX}px`;
            container.style.top = `${e.pageY}px`;
        });
    });

    document.addEventListener('mousedown', function() {
        imageDown.style.display = 'block';
    });
    document.addEventListener('mouseup', function() {
        imageDown.style.display = 'none';
    });

    return true;
};
