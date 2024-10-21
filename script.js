const textElement = document.getElementById('screen-text');

const text1 = "The Cyberene Club focuses on developing technical skills and innovation through collaborative learning, hands-on workshops, and industry engagement. We aim to bridge the gap between academic knowledge and industry needs by providing experience with emerging technologies, networking with IT professionals, and solving real-world challenges. We also promotes ethical tech practices and leadership development to prepare members for successful IT careers";
const text2 = "You clicked Button 2, and this text is now being typed.";
const text3 = "Empowering Future Tech Specialists and Enthusiasts Through Innovation and Excellence.";
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
