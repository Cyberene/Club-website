const textElement = document.getElementById('screen-text');

const text1 = "This is the new text for Button 1, and it will be typed.";
const text2 = "You clicked Button 2, and this text is now being typed.";
const text3 = "Here is the text for Button 3. Watch it being typed out.";
const text4 = "Button 4 was clicked! Typing out some new text now.";

function typeEffect(text) {
    let index = 0;
    const speed = 100;
    textElement.textContent = "";

    function type() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.getElementById('btn1').addEventListener('click', function() {
    typeEffect(text1);
});

document.getElementById('btn2').addEventListener('click', function() {
    typeEffect(text2);
});

document.getElementById('btn3').addEventListener('click', function() {
    typeEffect(text3);
});

document.getElementById('btn4').addEventListener('click', function() {
    typeEffect(text4);
});
