# 💻 Adnan Pathan — Interactive Terminal Portfolio

An interactive, terminal-themed portfolio web application built with HTML, CSS, and Vanilla JavaScript. Designed for DevOps & Cloud Engineers.

Live Demo: [adnanpathan-portfolio.netlify.app](https://adnanpathan-portfolio.netlify.app/)

---

## ✨ Features

- 🖥️ **Terminal UI & Boot Animation**: Bios boot sequence, interactive matrix rain canvas, sound effects engine.
- 📄 **Direct Resume Download**: Running `resume` or `cv` directly downloads `resume.pdf` into your Downloads folder without external redirects.
- 📧 **Interactive Contact Form (`send-message`)**: Multi-step terminal contact form with API submission (Web3Forms/Formspree) and automatic pre-filled `mailto:` fallback.
- 📊 **Live GitHub Statistics**: Fetches public profile stats dynamically using the GitHub REST API.
- 🎨 **Multi-Theme Support**: Includes 5 themes (`hacker`, `cyberpunk`, `matrix`, `dracula`, `nord`).
- ⌨️ **Command History & Autocomplete**: Tab completion & Arrow key navigation.

---

## 🚀 Available Commands

| Command | Description |
| :--- | :--- |
| `whois adnan` / `about` | Display detailed bio and core competencies |
| `ls` | List available portfolio directories |
| `cd [folder]` | Navigate into `education`, `experience`, `projects`, `contact`, `skills` |
| `cat [file]` | Inspect specific text files |
| `skills` | Show animated skill level matrix bars |
| `stats` | Load live GitHub statistics (`@iadnan172`) |
| `resume` / `cv` | **Directly download** `resume.pdf` |
| `send-message` / `email` | Interactively send a message via terminal |
| `theme --list` | List color themes |
| `theme [name]` | Switch theme (`hacker`, `cyberpunk`, `matrix`, `dracula`, `nord`) |
| `ssh adnan` | Interactive easter egg SSH connection simulation |
| `ping adnan` | Network ping simulation & email launcher |
| `neofetch` | Display system overview specs |
| `clear` / `cls` | Clear terminal screen buffer |
| `help` | Show command menu |

---

## 🛠️ Configuration & Customization

### 1. Update Resume PDF
Replace `resume.pdf` in the root folder with your latest PDF file, or change `RESUME_URL` in `script.js` under `showResume()`.

### 2. Custom Message API (Optional)
To use a custom Formspree form or Web3Forms key for `send-message`:
In `script.js`, edit `portfolioData.contact`:
```javascript
contact: {
    email: "work.adnanpathan@gmail.com",
    github: "https://github.com/iadnan172",
    linkedin: "https://www.linkedin.com/in/adnan-p-47a68a249/",
    formspreeUrl: "https://formspree.io/f/YOUR_FORM_ID" // optional
}
```

---

## 📄 License

MIT License. Feel free to fork and customize for your own portfolio!
