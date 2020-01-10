const admin = require('firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");

const fs = require("fs").promises;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const sendNotification = async (req, res) => {
    const payload = req.body;

    try {
        const path = './save/lastToken';

        const token = await fs.readFile(path, { encoding: 'utf-8' });

        const options = {
            priority: 'high',
            timeToLive: 60 * 60 * 24
        };

        const response = await admin.messaging().sendToDevice(token, payload, options)

        res.status(200).send(response);

    } catch (err) {
        console.log(err)
        res.status(400).send(err);
    }
}

module.exports = sendNotification;