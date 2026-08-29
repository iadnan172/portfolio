import { useEffect, useRef, useState, useCallback } from "react";
import {
  aboutHtml, directoryHtml, educationHtml, experienceHtml, projectsHtml,
  contactHtml, helpHtml, neofetchHtml, pingHtml, gitLogHtml, dockerHtml,
  btopHtml, notFoundHtml, cdErrorHtml, catErrorHtml,
} from "../commands/staticHtml";
import { portfolioData, ALL_COMMANDS } from "../data/portfolioData";
import SkillsBlock from "./blocks/SkillsBlock";
import ResumeBlock from "./blocks/ResumeBlock";
import StatsBlock from "./blocks/StatsBlock";
import SSHBlock from "./blocks/SSHBlock";
import SendMessageBlock from "./blocks/SendMessageBlock";

let uid = 0;
const nextId = () => `e${++uid}`;

const QUICK_PILLS = [
  { label: "whois", cmd: "whois adnan" },
  { label: "skills", cmd: "skills" },
  { label: "projects", cmd: "cd projects" },
  { label: "k8s", cmd: "k8s" },
  { label: "resume", cmd: "resume" },
  { label: "git log", cmd: "git log --graph" },
  { label: "docker ps", cmd: "docker ps" },
  { label: "btop", cmd: "btop" },
];

export default function Terminal() {
  const [entries, setEntries] = useState([]);
  const [busy, setBusy] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter command... (Tab to autocomplete)");
  const [muted, setMuted] = useState(() => localStorage.getItem("terminalSoundMuted") === "true");
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  const sendMsgRef = useRef({ active: false, step: 0, entered: [], sending: false, result: null });
  const [sendMsgVersion, setSendMsgVersion] = useState(0);
  const bumpSendMsg = () => setSendMsgVersion((v) => v + 1);

  const historyRef = useRef([]);
  const historyIndexRef = useRef(-1);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const audioCtxRef = useRef(null);
  const keyBufferRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, 20);
  }, []);

  const push = useCallback((entry) => {
    setEntries((prev) => [...prev, { id: nextId(), ...entry }]);
    scrollToBottom();
  }, [scrollToBottom]);

  const pushHtml = useCallback((html) => push({ kind: "html", html }), [push]);

  // ---------- Audio (mechanical key click) ----------
  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtxRef.current.state === "suspended") audioCtxRef.current.resume();
    return audioCtxRef.current;
  };

  const createKeyBuffer = () => {
    try {
      const ctx = getAudioContext();
      const sampleRate = ctx.sampleRate;
      const duration = 0.04;
      const frameCount = Math.floor(sampleRate * duration);
      const buffer = ctx.createBuffer(1, frameCount, sampleRate);
      const channel = buffer.getChannelData(0);
      for (let i = 0; i < frameCount; i++) {
        const t = i / sampleRate;
        const decay = Math.exp(-t * 220);
        const noise = (Math.random() * 2 - 1) * decay;
        const clickSine = Math.sin(2 * Math.PI * 2200 * t) * Math.exp(-t * 350);
        const bodyThud = Math.sin(2 * Math.PI * 350 * t) * Math.exp(-t * 120);
        channel[i] = noise * 0.5 + clickSine * 0.35 + bodyThud * 0.15;
      }
      keyBufferRef.current = buffer;
    } catch (e) { /* no-op */ }
  };

  const playKeySound = (key) => {
    if (muted) return;
    try {
      const ctx = getAudioContext();
      if (!keyBufferRef.current) createKeyBuffer();
      if (!keyBufferRef.current) return;
      const source = ctx.createBufferSource();
      const gain = ctx.createGain();
      source.buffer = keyBufferRef.current;
      let rate = 0.95 + Math.random() * 0.1;
      if (key === "Enter") rate = 0.75;
      else if (key === "Backspace" || key === "Delete") rate = 0.85;
      else if (key === " ") rate = 0.8;
      source.playbackRate.value = rate;
      gain.gain.value = 0.18;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
    } catch (e) { /* no-op */ }
  };

  const toggleMuted = () => {
    getAudioContext();
    setMuted((m) => {
      const next = !m;
      localStorage.setItem("terminalSoundMuted", next ? "true" : "false");
      return next;
    });
  };

  // ---------- Loading wrapper ----------
  const withLoading = useCallback(async (fn) => {
    setBusy(true);
    const loadingId = nextId();
    setEntries((prev) => [...prev, { id: loadingId, kind: "loading" }]);
    scrollToBottom();
    await new Promise((r) => setTimeout(r, 350));
    setEntries((prev) => prev.filter((e) => e.id !== loadingId));
    await fn();
    setBusy(false);
  }, [scrollToBottom]);

  // ---------- Commands ----------
  const showAbout = () => withLoading(async () => pushHtml(aboutHtml()));
  const showDirectory = () => withLoading(async () => pushHtml(directoryHtml()));
  const showEducation = () => withLoading(async () => pushHtml(educationHtml()));
  const showExperience = () => withLoading(async () => pushHtml(experienceHtml()));
  const showProjects = () => withLoading(async () => pushHtml(projectsHtml()));
  const showContact = () => withLoading(async () => pushHtml(contactHtml()));
  const showSkills = () => withLoading(async () => push({ kind: "component", component: "skills" }));
  const showHelp = () => withLoading(async () => pushHtml(helpHtml()));
  const showNeofetch = () => withLoading(async () => pushHtml(neofetchHtml()));
  const showGitLog = () => withLoading(async () => pushHtml(gitLogHtml()));
  const showDocker = () => withLoading(async () => pushHtml(dockerHtml()));
  const showBtop = () => withLoading(async () => pushHtml(btopHtml()));
  const showStats = () => withLoading(async () => push({ kind: "component", component: "stats" }));
  const showResume = () => withLoading(async () => push({ kind: "component", component: "resume" }));
  const showSSH = () => withLoading(async () => push({ kind: "component", component: "ssh" }));

  const pingAdnan = () => withLoading(async () => {
    const recipientEmail = portfolioData.contact.email;
    const subject = encodeURIComponent("Portfolio Contact - Let's Connect");
    const body = encodeURIComponent("Hi Adnan,\n\nI came across your portfolio website and would like to connect with you regarding an opportunity.");
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    const desktopGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${subject}&body=${body}`;
    const mobileMailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    if (isMobile) window.location.href = mobileMailtoUrl;
    else window.open(desktopGmailUrl, "_blank");

    pushHtml(pingHtml({ recipientEmail, isMobile, mobileMailtoUrl, desktopGmailUrl }));
  });

  const startSendMessage = () => withLoading(async () => {
    sendMsgRef.current = { active: true, step: 0, entered: [], sending: false, result: null };
    bumpSendMsg();
    push({ kind: "sendmessage" });
    setPlaceholder("Your name... (Press Esc to cancel)");
  });

  const cancelSendMessage = () => {
    sendMsgRef.current = { active: false, step: 0, entered: [], sending: false, result: null };
    bumpSendMsg();
    setPlaceholder("Enter command... (Tab to autocomplete)");
    pushHtml('<div class="warning-text">⚠️ Message input cancelled.</div>');
  };

  const handleSendMessageStep = async (value) => {
    const sm = sendMsgRef.current;
    if (sm.step === 0) {
      sendMsgRef.current = { ...sm, step: 1, entered: [...sm.entered, { label: "Name", value }] };
      bumpSendMsg();
      setPlaceholder("Your email...");
      return;
    }
    if (sm.step === 1) {
      sendMsgRef.current = { ...sm, step: 2, entered: [...sm.entered, { label: "Email", value }] };
      bumpSendMsg();
      setPlaceholder("Your message...");
      return;
    }
    if (sm.step === 2) {
      const name = sm.entered[0]?.value || "";
      const email = sm.entered[1]?.value || "";
      const message = value;
      sendMsgRef.current = { ...sm, step: 3, entered: [...sm.entered, { label: "Message", value: message }], sending: true };
      bumpSendMsg();
      setPlaceholder("Enter command... (Tab to autocomplete)");

      const recipientEmail = portfolioData.contact.email;
      let isSuccess = false;
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: "0da2f0d9-482a-4318-ba28-3e473e16b9b3",
            subject: `Portfolio Message from ${name}`,
            from_name: name,
            email,
            message,
          }),
        });
        if (res.ok) {
          const json = await res.json();
          if (json.success !== false) isSuccess = true;
        }
      } catch (e) {
        isSuccess = false;
      }

      if (isSuccess) {
        sendMsgRef.current = { ...sendMsgRef.current, sending: false, result: "success", active: false };
      } else {
        const subject = encodeURIComponent(`Portfolio Message from ${name}`);
        const body = encodeURIComponent(`Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
        sendMsgRef.current = { ...sendMsgRef.current, sending: false, result: "mailto", active: false };
      }
      bumpSendMsg();
      scrollToBottom();
    }
  };

  // ---------- Navigation (ls file cards / cd) ----------
  const handleNavigation = (folder) => runCommand(`cd ${folder}`);

  const handleCd = (folder) => {
    switch (folder) {
      case "education": return showEducation();
      case "experience": return showExperience();
      case "projects": return showProjects();
      case "contact": return showContact();
      case "skills": return showSkills();
      case "..": return showDirectory();
      default: return withLoading(async () => pushHtml(cdErrorHtml(folder)));
    }
  };

  const handleCat = (file) => {
    switch (file) {
      case "education.txt": case "education": return showEducation();
      case "experience.txt": case "experience": return showExperience();
      case "projects.txt": case "projects": return showProjects();
      case "contact.txt": case "contact": return showContact();
      case "skills.txt": case "skills": return showSkills();
      default: return withLoading(async () => pushHtml(catErrorHtml(file)));
    }
  };

  // ---------- Main dispatcher ----------
  const runCommand = async (raw) => {
    const rawCommand = raw.trim();
    if (!rawCommand) return;

    if (sendMsgRef.current.active) {
      push({ kind: "command", text: rawCommand });
      await handleSendMessageStep(rawCommand);
      return;
    }

    const command = rawCommand.toLowerCase();
    historyRef.current.push(rawCommand);
    historyIndexRef.current = historyRef.current.length;

    push({ kind: "command", text: rawCommand });

    if (command === "whois adnan" || command === "about") return showAbout();
    if (command === "ls") return showDirectory();
    if (command.startsWith("cd ")) return handleCd(command.substring(3).trim());
    if (command.startsWith("cat ")) return handleCat(command.substring(4).trim());
    if (command === "skills") return showSkills();
    if (command === "stats") return showStats();
    if (command === "resume" || command === "cv" || command === "download-resume") return showResume();
    if (command === "send-message" || command === "email" || command === "mail" || command === "message") return startSendMessage();
    if (command === "ssh adnan" || command === "ssh") return showSSH();
    if (command === "clear" || command === "cls") { setEntries([]); return; }
    if (command === "help") return showHelp();
    if (command === "ping adnan" || command === "ping") return pingAdnan();
    if (command === "neofetch") return showNeofetch();
    if (command === "git log --graph" || command === "git log" || command === "git") return showGitLog();
    if (command === "docker ps" || command === "docker" || command === "containers") return showDocker();
    if (command === "btop" || command === "htop" || command === "system-monitor" || command === "top") return showBtop();
    if (command === "k8s" || command === "kubectl" || command === "kubectl get pods") return showProjects();

    return withLoading(async () => pushHtml(notFoundHtml(rawCommand)));
  };

  // ---------- Input handling ----------
  const onKeyDown = (e) => {
    playKeySound(e.key);

    if (e.key === "Escape") {
      if (sendMsgRef.current.active) cancelSendMessage();
      setInputValue("");
      return;
    }
    if (e.key === "Enter") {
      const val = inputValue;
      setInputValue("");
      if (!busy || sendMsgRef.current.active) runCommand(val);
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndexRef.current > 0) {
        historyIndexRef.current -= 1;
        setInputValue(historyRef.current[historyIndexRef.current]);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndexRef.current < historyRef.current.length - 1) {
        historyIndexRef.current += 1;
        setInputValue(historyRef.current[historyIndexRef.current]);
      } else {
        historyIndexRef.current = historyRef.current.length;
        setInputValue("");
      }
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      const value = inputValue.toLowerCase();
      const match = ALL_COMMANDS.find((c) => c.startsWith(value) && c !== value);
      if (match) setInputValue(match);
    }
  };

  const onOutputClick = (e) => {
    const card = e.target.closest("[data-nav]");
    if (card) handleNavigation(card.getAttribute("data-nav"));
  };

  const onQuickPill = (cmd) => runCommand(cmd);

  const onContainerClick = (e) => {
    const tag = e.target.tagName;
    if (!["INPUT", "A", "BUTTON"].includes(tag)) inputRef.current?.focus();
  };

  return (
    <div className="terminal-container" onClick={onContainerClick}>
      <div className="terminal-header">
        <div className="window-controls">
          <span className="control close" />
          <span className="control minimize" />
          <span className="control maximize" />
        </div>
        <div className="terminal-title">adnan@portfolio:~$</div>
        <div className="status-indicators">
          <button className={`sound-toggle-btn ${muted ? "muted" : ""}`} onClick={(e) => { e.stopPropagation(); toggleMuted(); }} title="Toggle typing sound">
            <span>{muted ? "🔇" : "🔊"}</span>
          </button>
          <span className="status-secure-text">SECURE</span>
          <span className="status-dot active" />
        </div>
      </div>

      <div className="terminal-body" ref={bodyRef} onClick={onOutputClick}>
        <div className="terminal-hero">
          <pre className="ascii-art">{`ADNAN PATHAN\nDevOps Engineer & Cloud Architect`}</pre>
          <div className="hero-text-block">
            <div className="output-text hero-line">
              Welcome to <span className="highlight">ADNAN PATHAN's</span> terminal portfolio
            </div>
            <div className="output-text hero-line">
              <span className="info-text">DevOps Engineer</span> · <span className="info-text">Cloud Engineer</span> · <span className="info-text">Site Reliability Engineer</span>
            </div>
            <div className="hero-instructions">
              <div className="output-text">Type <span className="command-text">'whois adnan'</span> to know more about me</div>
              <div className="output-text">Type <span className="command-text">'help'</span> for available commands</div>
            </div>
          </div>
        </div>

        <div className="terminal-output">
          {entries.map((entry) => (
            <OutputEntry key={entry.id} entry={entry} sendMsgState={sendMsgRef.current} sendMsgVersion={sendMsgVersion} />
          ))}
        </div>
      </div>

      <div className="mobile-quick-bar">
        {QUICK_PILLS.map((p) => (
          <button key={p.cmd} className="quick-pill" onClick={() => onQuickPill(p.cmd)}>{p.label}</button>
        ))}
      </div>

      <div className="input-area">
        <span className="input-prompt">adnan@portfolio:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          autoComplete="off"
          spellCheck="false"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>

      <div className="status-bar">
        <div className="status-item">SSH: Connected</div>
        <div className="status-item">Docker: Running</div>
        <div className="status-item">K8s: Active</div>
        <div className="status-item">{time}</div>
      </div>
    </div>
  );
}

function OutputEntry({ entry, sendMsgState }) {
  if (entry.kind === "command") {
    return (
      <div className="command-entry">
        <div className="command-line">
          <span className="prompt-symbol">adnan@portfolio:~$</span>
          <span className="command-text">{entry.text}</span>
        </div>
      </div>
    );
  }
  if (entry.kind === "loading") {
    return (
      <div className="command-line">
        <span className="loading" /> <span className="output-text">Executing command...</span>
      </div>
    );
  }
  if (entry.kind === "html") {
    return <div className="output-block" dangerouslySetInnerHTML={{ __html: entry.html }} />;
  }
  if (entry.kind === "component") {
    return (
      <div className="output-block">
        {entry.component === "skills" && <SkillsBlock />}
        {entry.component === "resume" && <ResumeBlock />}
        {entry.component === "stats" && <StatsBlock />}
        {entry.component === "ssh" && <SSHBlock />}
      </div>
    );
  }
  if (entry.kind === "sendmessage") {
    return <div className="output-block"><SendMessageBlock state={sendMsgState} /></div>;
  }
  return null;
}
