// app.js

const admin = require("firebase-admin");
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

const serviceAccount = require("./serviceaccountkey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Define an endpoint to send push notifications
app.post('/send-notification', (req, res) => {
    // Ensure that req.body exists and contains the expected properties
    if (!req.body || !req.body.title || !req.body.body || !req.body.token) {
        return res.status(400).send('Bad Request: Missing parameters');
    }

    // Extract title, body, and token from request body
    const { title, body, token } = req.body;

    // Create the notification message
    const message = {
        token: token,
        notification: {
            title: title,
            body: body
        }
    };

    // Send the notification
    admin.messaging().send(message)
        .then((response) => {
            console.log('Successfully sent message:', response);
            res.status(200).send('Notification sent successfully');
        })
        .catch((error) => {
            console.error('Error sending message:', error);
            res.status(500).send('Error sending notification');
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
