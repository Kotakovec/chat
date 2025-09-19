self.addEventListener('push', e => {
  const data = e.data.json();
  const options = {
    body: data.message,
    icon: 'images/logo.png',
    badge: 'images/logo.png'
  };
  e.waitUntil(self.registration.showNotification(data.sender, options));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/index.html'));
});