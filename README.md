# BotGauge React Assignment

This repository contains the solution for the **BotGauge Frontend Assignment**.  
The goal of this project is to demonstrate clean React development practices, modular component design, and clear documentation — not just a working UI.

The application is built using **React (JavaScript) with Vite** and is fully frontend-only.

## 🔗 Repository & Live Demo

- **GitHub Repository:**  
  https://github.com/IlsaMalik/botgauge-react-assignment

- **Live Demo (GitHub Pages):**  
  https://ilsamalik.github.io/botgauge-react-assignment/

##  Approach & Design Decisions

The project was implemented with the following principles in mind:

- **Component-based architecture** to ensure reusability and readability
- **Separation of concerns** (logic, UI, and styles kept organized)
- **Explicit state handling** to avoid unpredictable UI behavior
- **Graceful handling of edge cases** at the UI level
- **No unnecessary abstractions or libraries**

## 🛠 Tech Stack

- **React (JavaScript)**
- **Vite**
- **HTML5**
- **CSS3**
- **Git & GitHub**
- **GitHub Pages** (for hosting)

## 📂 Project Structure
site_test-main/
│
├── src/
│ ├── components/
│ │ ├── StepEditor.jsx
│ │ ├── TokenEditor.jsx
│ │ ├── GlobalVariableDropdown.jsx
│ │ ├── SuggestionDropdown.jsx
│ │ └── *.css
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── public/
│
├── vite.config.js
├── package.json
├── package-lock.json
└── README.md
## ✨ Key Features

- Modular React components
- Step editor with controlled inputs
- Token editor with validation-safe updates
- Global variable and suggestion dropdowns
- Predictable state updates
- Fully client-side application
- Clean UI without third-party UI frameworks

---

##  Error Handling & Edge Cases

The application handles common UI edge cases such as:

- Preventing undefined or empty state access
- Safe rendering when optional data is missing
- Controlled inputs to avoid uncontrolled state errors
- Defensive checks before updating dependent UI elements

Since this is a frontend-only assignment, error handling is focused on **UI stability and predictable behavior** rather than server-side failures.

