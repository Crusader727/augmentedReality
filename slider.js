var sliderElem = document.getElementById('slider');
var thumbElem = sliderElem.children[0];

const model = document.getElementById("model");

thumbElem.onmousedown = function(e) {
    var thumbCoords = getCoords(thumbElem);
    var shiftY = e.pageY - thumbCoords.top;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    var sliderCoords = getCoords(sliderElem);

    document.onmousemove = function(e) {
        //  вычесть координату родителя, т.к. position: relative
        var newLeft = e.pageY - shiftY - sliderCoords.top;

        // курсор ушёл вне слайдера
        if (newLeft < 0) {
            newLeft = 0;
        }
        var rightEdge = sliderElem.offsetHeight - thumbElem.offsetHeight;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumbElem.style.top = newLeft + 'px';
        model.setAttribute("scale", getScaleValue())

    }

    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };

    return false; // disable selection start (cursor change)
};

thumbElem.ondragstart = function() {
    return false;
};

function getCoords(elem = thumbElem) { // кроме IE8-
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };

}

function getScaleValue() {
    const box = thumbElem.getBoundingClientRect();
    newScale = (box.top - 10) / 80;
    return newScale + " " + newScale + " " + newScale;
}