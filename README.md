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
