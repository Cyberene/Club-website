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

document.getElementById('contact-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = {
        first_name: e.target.first_name.value,
        second_name: e.target.second_name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        message: e.target.message.value
        
    };

    try {
        const response = await fetch('https://club-website-3r77.onrender.com/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Form submitted successfully!');
        } else {
            alert('Failed to submit the form.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form');
    }
});
