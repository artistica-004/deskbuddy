<div align="center">

# 🏃‍♀️💧 DeskBuddy

### Your personal fitness buddy, living right on your desktop.

DeskBuddy is a cute, animated desktop companion that pops up every hour to remind you to **drink water**, **do squats**, **pushups**, and **pull-ups** — because sitting all day shouldn't mean skipping movement.

![Platform](https://img.shields.io/badge/platform-Windows-blue?style=flat-square)
![Built with Electron](https://img.shields.io/badge/built%20with-Electron-47848F?style=flat-square&logo=electron)
![License: MIT](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Open Source](https://img.shields.io/badge/open%20source-%E2%9D%A4-red?style=flat-square)

</div>

---

## ✨ What it does

DeskBuddy floats on your screen as a small always-on-top widget. Every hour between **10 AM – 10 PM**, it:

- 🔔 Sends a Windows notification reminding you what to do next
- 🎬 Plays a short looping video of the reminder — drinking water, squats, pushups, or pull-ups
- 🔁 Cycles through all four reminders automatically, hour by hour
- 🚀 Auto-launches when Windows starts, so it's always working in the background

No app to remember to open. No excuses to skip your hourly movement break.

## 🎯 Why I built this

Sitting at a desk all day is easy to fall into and hard to break out of. Instead of relying on willpower alone, DeskBuddy nudges you — visually and audibly — to take a 60-second break, every single hour, without you having to think about it.

## 🖥️ Features

| Feature | Description |
|---|---|
| 🪟 Floating widget | Transparent, frameless, always-on-top window |
| ⏰ Smart scheduling | Reminders only fire between 10 AM–10 PM, once per hour |
| 🎥 Green-screen animation | Real video clips with the background removed in real time (canvas-based chroma keying) |
| 🔔 Native notifications | Uses Windows' built-in notification system |
| 🚀 Auto-start | Launches automatically on login |
| 📦 Installable | Packaged as a proper `.exe` installer via `electron-builder` |

## 🛠️ Tech Stack

- **[Electron](https://www.electronjs.org/)** — cross-platform desktop app shell
- **HTML5 Canvas** — real-time chroma key (green screen removal)
- **Vanilla JavaScript** — reminder scheduling & IPC between main/renderer
- **electron-builder** — packaging into a Windows installer

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version)
- Windows 10/11

### Installation

```bash
git clone https://github.com/artistica-004/deskbuddy.git
cd deskbuddy
npm install
```

### Add your own clips
DeskBuddy needs 4 short looping video clips, **shot on a solid green background**, named exactly:

```
drink.mp4      → drinking water
squats.mp4     → doing squats
pushups.mp4    → doing pushups
pullups.mp4    → doing pull-ups
```

Drop them in the root of the project folder.

### Run it in dev mode

```bash
npm start
```

### Build a standalone installer

```bash
npm run dist
```

You'll find `DeskBuddy Setup.exe` inside the generated `dist/` folder — double-click to install it as a real Windows app.

## ⚙️ Customization

| What you want to change | Where |
|---|---|
| Reminder window hours | `main.js` → the `hour >= 10 && hour < 22` check |
| Widget position on screen | `main.js` → `x` / `y` values in `createWindow()` |
| Widget size | `main.js` (`winWidth`/`winHeight`) + `index.html` (`#pet` width) |
| Green screen sensitivity | `index.html` → the `g > 100 && g > r * 1.3...` condition in `drawFrame()` |
| Reminder messages | `main.js` → the `tasks` array |

## 🗺️ Roadmap

- [ ] macOS support
- [ ] Custom reminder intervals (not just hourly)
- [ ] Draggable widget position (no more hardcoded x/y)
- [ ] Settings UI instead of editing code directly
- [ ] Sound effects on reminder trigger

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/artistica-004/deskbuddy/issues) or open a pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free to use, modify, and distribute.

---

<div align="center">

Made with 💪 to fight the sitting-all-day life.

</div>