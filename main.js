const { app, BrowserWindow, Notification, screen, ipcMain, Tray, Menu } = require('electron');
const path = require('path');

app.setLoginItemSettings({
  openAtLogin: true
});

let win;
let tray;

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

function createTray() {
  tray = new Tray(path.join(__dirname, 'assets', 'icon.png'));

  const contextMenu = Menu.buildFromContextMenu ? null : Menu.buildFromTemplate([
    { label: 'Show DeskBuddy', click: () => win.show() },
    { label: 'Hide DeskBuddy', click: () => win.hide() },
    { type: 'separator' },
    { label: 'Quit DeskBuddy', click: () => app.quit() }
  ]);

  tray.setToolTip('DeskBuddy');
  tray.setContextMenu(contextMenu);
}

function triggerReminder() {
  const task = tasks[taskIndex];
  taskIndex = (taskIndex + 1) % tasks.length;

  win.show();
  win.webContents.send('play-task', task.name);

  new Notification({
    title: 'Time to move!',
    body: task.label
  }).show();

  console.log('Reminder fired at', new Date().toLocaleTimeString(), '-', task.label);
}

ipcMain.on('hide-widget', () => {
  win.hide();
});

app.whenReady().then(() => {
  createWindow();
  createTray();

  setInterval(() => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (minute === 0 && hour >= 10 && hour < 22) {
      triggerReminder();
    }
  }, 60 * 1000);
});

app.on('window-all-closed', () => {
  // don't quit when window is hidden/closed — only quit via tray menu
});