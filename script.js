const textElement = document.getElementById('screen-text');

const text1 = "We focus on developing technical skills and innovation through collaborative learning, hands-on workshops, and industry engagement.";
const text2 = "WHERE TECHNOLOGY MEETS POSSIBILTY";
const text3 = "Empowering Future Tech Specialists and Enthusiasts Through Innovation and Excellence.";


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
