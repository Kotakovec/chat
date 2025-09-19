const express = require('express');
const bodyParser = require('body-parser');
const webpush = require('web-push');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// VAPID klíče – vygeneruj přes web-push
const publicVapidKey = 'TVŮJ_PUBLIC_KEY';
const privateVapidKey = 'TVŮJ_PRIVATE_KEY';
webpush.setVapidDetails('mailto:tvoje@email.cz', publicVapidKey, privateVapidKey);

let subscriptions = [];

// Endpoint pro registraci PWA subscription
app.post('/subscribe', (req, res) => {
  subscriptions.push(req.body);
  res.status(201).json({});
});

// Endpoint pro odeslání notifikace
app.post('/send', (req, res) => {
  const { sender, message } = req.body;
  const payload = JSON.stringify({ sender, message });
  subscriptions.forEach(sub => {
    webpush.sendNotification(sub, payload).catch(err => console.error(err));
  });
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server běží na portu ${PORT}`));