const { app, BrowserWindow, Notification, screen } = require('electron');

app.setLoginItemSettings({
  openAtLogin: true
});

let win;

const tasks = [
  { name: 'drink', label: 'Drink some water 💧' },
  { name: 'squats', label: 'Do 10 squats 🏋️' },
  { name: 'pushups', label: 'Do 5 pushups 💪' },
  { name: 'pullups', label: 'Do 2 pull-ups 🧗' }
];

let taskIndex = 0;

function createWindow() {
  const { width: screenWidth } = screen.getPrimaryDisplay().workAreaSize;

  const winWidth = 450;
  const winHeight = 280;

  win = new BrowserWindow({
    width: winWidth,
    height: winHeight,
    x: screenWidth - winWidth - 150,
    y: 20,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile('index.html');
}

function triggerReminder() {
  const task = tasks[taskIndex];
  taskIndex = (taskIndex + 1) % tasks.length;

  win.webContents.send('play-task', task.name);

  new Notification({
    title: 'Time to move!',
    body: task.label
  }).show();

  console.log('Reminder fired at', new Date().toLocaleTimeString(), '-', task.label);
}

app.whenReady().then(() => {
  createWindow();

  // check every minute whether we're exactly on the hour, between 10am-10pm
  setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (minute === 0 && hour >= 10 && hour < 22) {
      triggerReminder();
    }
  }, 60 * 1000); // check every minute
});