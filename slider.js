const model = document.getElementById("model");
function onSliderValueChange(value) { //binded in html
    model.setAttribute('scale', `${value} ${value} ${value}`)
}