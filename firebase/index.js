
// // app.js
// const admin = require("firebase-admin");

// // Load the service account key JSON file
// const serviceAccount = require("../serviceaccountkey.json");

// // Initialize Firebase Admin SDK
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// // Function to send a notification to a topic
// const sendNotificationToTopic = (title, body) => {
//     const message = {
//         token: "cekVYqsMRSi43l5uc-ogZm:APA91bEIFX2BAo_Z1l_bja7mrdFxdz9JIN8S1vYDtXkdakNNiQmGdhqKpeSl-7XKrSkYwjJ2qzKAPQ1caMjMwi3wF80dnG9Dfn2YhCvEtWnYQ5GoG7ZT2pjiMzhWX-jJ7Lj5u2hKCs_f",
//         notification: {
//             title: title,
//             body: body
//         },

//     };

//     // Send the message
//     return admin.messaging().send(message); // Use send method instead of sendToTopic
// };

// module.exports = {
//     admin,
//     sendNotificationToTopic
// };