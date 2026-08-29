<<<<<<< HEAD
# Adnan Pathan — Terminal Portfolio (React)

A clean, glass-styled terminal portfolio built with React + Vite.

## Stack
- React 19 + Vite
- Plain CSS (no framework) — single theme file at `src/styles/terminal.css`

## Structure
```
src/
  data/portfolioData.js     # all resume/profile content + command list
  commands/staticHtml.js    # static command output (about, ls, help, docker ps, etc.)
  components/
    Terminal.jsx             # main shell: input handling, command dispatch, history
    BootScreen.jsx            # boot sequence shown on load
    blocks/
      SkillsBlock.jsx         # animated skill bars
      ResumeBlock.jsx         # resume download flow
      StatsBlock.jsx          # live GitHub stats (api.github.com)
      SSHBlock.jsx             # ssh easter egg
      SendMessageBlock.jsx    # terminal contact form
  styles/terminal.css        # theme — glass, dark charcoal, soft-green/cyan accents
public/
  DEVOPS_ADNAN_PATHAN_RESUME.pdf
```

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
Outputs to `dist/`. Deploy `dist/` to Netlify (or any static host) the same way the previous version was deployed.

## What changed vs. the original vanilla version
- Rebuilt as React components; same command set, same resume flow, same GitHub-stats layout — content and behavior preserved.
- New visual theme: dark charcoal + glass panels, off-white/soft-green text, subtle green/cyan accents, thin borders, no neon glows.
- Removed the animated matrix-rain background, particle layer, and the 9-color neon theme switcher (`theme` command) — these were the main source of the neon look and worked against the "clean, minimal" brief. Replaced with a static, subtle ambient gradient.
- Everything else (whois, ls/cd/cat navigation, skills, stats, resume, git log, docker ps, btop, ssh, ping, send-message, help, clear, history, tab-autocomplete, mobile quick bar, typing sound) works the same as before.
=======
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
>>>>>>> 1376df9aa0950af35d543a6d7392862d615753f0
