from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Load email details from environment variables
SMTP_SERVER = os.getenv('MAIL_SERVER')
SMTP_PORT = os.getenv('MAIL_PORT')
SENDER_EMAIL = os.getenv('MAIL_USERNAME')
SENDER_PASSWORD = os.getenv('MAIL_PASSWORD')
WHATSAPP_GROUP_LINK = os.getenv('WHATSAPP_GROUP_LINK')
OWNER_EMAIL = os.getenv('MAIL_DEFAULT_SENDER')  # Owner's email from .env

def send_welcome_email(name, recipient_email):
    """Sends a welcome email to the user"""
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = recipient_email
    msg['Subject'] = "Welcome to Cyberene"

    body = f"""
    Hi {name},

    Welcome to the Cyberene Club! We are excited to have you join us.

    Here is the link to our WhatsApp group where we share club updates and events:
    {WHATSAPP_GROUP_LINK}

    Best regards,
    Cyberene Team
    """
    msg.attach(MIMEText(body, 'plain'))

    try:
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, recipient_email, msg.as_string())
            print("Welcome email sent")
    except Exception as e:
        print(f"Failed to send welcome email: {str(e)}")


def send_contact_email(first_name, second_name, user_email, phone_number, subject, message):
    """Sends the contact form details to the owner"""
    
    # Create the email content
    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = OWNER_EMAIL 
    msg['Subject'] = f"{subject}"

    body = f"""
    You have received a new contact form submission:

    Name: {first_name} {second_name}
    Email: {user_email}
    Phone Number: {phone_number}
    Subject: {subject}
    Message: 
    {message}

    Please reply to {user_email}.
    """
    msg.attach(MIMEText(body, 'plain'))

    # Attempt to send the email
    try:
        with smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT) as server:
            server.login(SENDER_EMAIL, SENDER_PASSWORD)
            server.sendmail(SENDER_EMAIL, OWNER_EMAIL, msg.as_string())
            print("Contact form email sent to owner")
    except Exception as e:
        print(f"Failed to send contact form email: {str(e)}")


@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    first_name = data.get('first_name')
    second_name = data.get('second_name')
    email = data.get('email')
    phone_number = data.get('phone')
    subject = data.get('subject')
    message = data.get('message')

    if not (first_name and second_name and email and subject and message):
        return jsonify({"error": "All fields are required"}), 400

    # Send welcome email to the user
    send_welcome_email(first_name, email)

    # Send contact form email to the owner
    send_contact_email(first_name, second_name, email, phone_number, subject, message)

    return jsonify({"message": "Contact form submitted successfully"}), 200

if __name__ == "__main__":
    # Make sure you're using the correct environment variable for the port
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)