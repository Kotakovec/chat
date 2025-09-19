// sendNotification.js
const admin = require("firebase-admin");

// Načteme tvůj service account JSON
const serviceAccount = require("./serviceAccountKey.json");

// Inicializace Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Tvůj FCM token z chat.html (zařízení, které má dostávat notifikace)
const token = "BPcLZ8F8CDOkq--z35F1EGRQhlU2JtTVcdMxrelzoBRfrJ97kMG7KJlsY9iauCt-GOWV2ZydSXMbKQXBmNv0-ic";

// Notifikace, kterou chceme poslat
const message = {
  token: token,
  notification: {
    title: "KotakEngine",
    body: "Toto je testovací push notifikace!",
  },
  android: {
    priority: "high",
  },
  apns: {
    headers: {
      "apns-priority": "10",
    },
  },
};

// Odeslání notifikace
admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("Notifikace úspěšně odeslána:", response);
  })
  .catch((error) => {
    console.error("Chyba při odesílání notifikace:", error);
  });
