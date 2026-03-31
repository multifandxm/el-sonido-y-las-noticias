var slider1 = document.getElementById("volume-voice");
var output1 = document.getElementById("value1");

output1.innerHTML = slider1.value + ' ' + 'dB'

slider1.oninput = function() {
    output1.innerHTML = this.value + ' ' + 'dB';
}

slider1.addEventListener("mousemove", function(){
    var x = ((slider1.value - slider1.min) / (slider1.max - slider1.min) * 100);
    var color = 'linear-gradient(0deg, rgb(105, 124, 112)' + x + '%, rgb(242, 239, 226)' + x + '%)';
    slider1.style.background = color;
})


var slider2 = document.getElementById("volume-ambient");
var output2 = document.getElementById("value2");

output2.innerHTML = slider2.value + ' ' + 'dB'

slider2.oninput = function() {
    output2.innerHTML = this.value + ' ' + 'dB';
}

slider2.addEventListener("mousemove", function(){
    var x = ((slider2.value - slider2.min) / (slider2.max - slider2.min) * 100);
    var color = 'linear-gradient(0deg, rgb(105, 124, 112)' + x + '%, rgb(242, 239, 226)' + x + '%)';
    slider2.style.background = color;
})


var slider3 = document.getElementById("volume-music");
var output3 = document.getElementById("value3");

output3.innerHTML = slider3.value + ' ' + 'dB'

slider3.oninput = function() {
    output3.innerHTML = this.value + ' ' + 'dB';
}

slider3.addEventListener("mousemove", function(){
    var x = ((slider3.value - slider3.min) / (slider3.max - slider3.min) * 100);
    var color = 'linear-gradient(0deg, rgb(105, 124, 112)' + x + '%, rgb(242, 239, 226)' + x + '%)';
    slider3.style.background = color;
})