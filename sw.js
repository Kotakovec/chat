// sw.js – service worker pro Firebase push
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');

// Firebase config – stejný jako v chat.html
const firebaseConfig = {
  apiKey: "AIzaSyD96lOIJjN9_aFMlstYbx4aUaH_xwjtK8s",
  authDomain: "chat-a99ee.firebaseapp.com",
  projectId: "chat-a99ee",
  storageBucket: "chat-a99ee.appspot.com",
  messagingSenderId: "558124959244",
  appId: "1:558124959244:web:e603b56a1fbd9c2d12d029",
  measurementId: "G-2C6T31PMGS"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Zobraz push notifikace na pozadí
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] Push zpráva přijata:', payload);
  const notificationTitle = payload.notification?.title || 'Kotak Engine';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: 'images/logo.png',
    badge: 'images/logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        let client = clientList[i];
        if (client.url === '/' && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
// sw.js – service worker pro Firebase push
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js');

// Firebase config – stejný jako v chat.html
const firebaseConfig = {
  apiKey: "AIzaSyD96lOIJjN9_aFMlstYbx4aUaH_xwjtK8s",
  authDomain: "chat-a99ee.firebaseapp.com",
  projectId: "chat-a99ee",
  storageBucket: "chat-a99ee.appspot.com",
  messagingSenderId: "558124959244",
  appId: "1:558124959244:web:e603b56a1fbd9c2d12d029",
  measurementId: "G-2C6T31PMGS"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Zobraz push notifikace na pozadí
messaging.onBackgroundMessage((payload) => {
  console.log('[sw.js] Push zpráva přijata:', payload);
  const notificationTitle = payload.notification?.title || 'Kotak Engine';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: 'images/logo.png',
    badge: 'images/logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window" }).then(function(clientList) {
      for (let i = 0; i < clientList.length; i++) {
        let client = clientList[i];
        if (client.url === '/' && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
