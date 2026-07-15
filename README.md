# DeskBuddy 🏃‍♀️💧

A desktop fitness reminder app that shows an animated character reminding you to drink water, do squats, pushups, and pull-ups every hour.

## Features
- Floating always-on-top desktop widget
- Hourly reminders (10am–10pm) via Windows notifications
- Green-screen video cutout animation
- Auto-starts on Windows boot

## Setup
1. Clone this repo
2. Run `npm install`
3. Add your own video clips: `drink.mp4`, `squats.mp4`, `pushups.mp4`, `pullups.mp4` (shot on green background)
4. Run `npm start` to test, or `npm run dist` to build an installer

## Tech stack
Electron, HTML5 Canvas (for chroma keying), JavaScript

## License
MIT