var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');

/**
 * Helper functions
 * Source: http://jaketrent.com/post/addremove-classes-raw-javascript/
 */
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

document.getElementById('drop-area').addEventListener('dragover', function() {
    addClass(this, 'over');
});

document.getElementById('drop-area').addEventListener('dragleave', function() {
    removeClass(this, 'over');
});

document.getElementById('drop-area').addEventListener('drop', function() {
    removeClass(this, 'over');
});

window.addEventListener('dragover', function(evt){
    evt.preventDefault();
}, true);
