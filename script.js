// ===================== ASCII ART =====================
const asciiArt = `
╔══════════════════════════════════════════════════════╗
║     █████╗ ██████╗ ███╗   ██╗ █████╗ ███╗   ██╗      ║
║    ██╔══██╗██╔══██╗████╗  ██║██╔══██╗████╗  ██║      ║
║    ███████║██║  ██║██╔██╗ ██║███████║██╔██╗ ██║      ║
║    ██╔══██║██║  ██║██║╚██╗██║██╔══██║██║╚██╗██║      ║
║    ██║  ██║██████╔╝██║ ╚████║██║  ██║██║ ╚████║      ║
║    ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝      ║
║                                                      ║
║           P A T H A N                                ║
║           DevOps Engineer & Cloud Architect          ║
╚══════════════════════════════════════════════════════╝
`;

// ===================== BOOT ANIMATION =====================
const bootLines = [
    { text: 'ADNAN PATHAN BIOS v2.0.26 — Portfolio Edition', cls: 'title' },
    { text: 'Copyright (C) 2025 Adnan Pathan. All rights reserved.', cls: 'bios' },
    { text: '', cls: 'info' },
    { text: '[OK]  Initializing hardware components...', cls: 'ok' },
    { text: '[OK]  Loading kernel modules: docker.ko kubernetes.ko terraform.ko', cls: 'ok' },
    { text: '[OK]  Mounting AWS cloud storage...', cls: 'ok' },
    { text: '[OK]  Starting SSH daemon on port 22', cls: 'ok' },
    { text: '[OK]  Bringing up VPC networking (10.0.0.0/16)', cls: 'ok' },
    { text: '[OK]  Starting Kubernetes control plane (EKS v1.31)', cls: 'ok' },
    { text: '[OK]  Prometheus metrics exporter: active', cls: 'ok' },
    { text: '[OK]  Grafana dashboards: online', cls: 'ok' },
    { text: '[OK]  ArgoCD GitOps agent: synced', cls: 'ok' },
    { text: '[OK]  Jenkins CI/CD pipeline: ready', cls: 'ok' },
    { text: '', cls: 'info' },
    { text: '> All systems nominal. Launching portfolio...', cls: 'ready' },
];

function runBootAnimation() {
    const bootScreen = document.getElementById('bootScreen');
    const bootContent = document.getElementById('bootContent');
    const terminalContainer = document.getElementById('terminalContainer');

    let lineIndex = 0;
    const lineDelay = 130;

    function addNextLine() {
        if (lineIndex >= bootLines.length) {
            // Done — fade out boot screen & show terminal
            setTimeout(() => {
                bootScreen.classList.add('fade-out');
                terminalContainer.style.display = 'flex';
                setTimeout(() => {
                    bootScreen.style.display = 'none';
                    commandInput.focus();
                }, 850);
            }, 600);
            return;
        }

        const { text, cls } = bootLines[lineIndex];
        const div = document.createElement('div');
        div.className = `boot-line ${cls}`;
        div.textContent = text;
        bootContent.appendChild(div);
        lineIndex++;
        setTimeout(addNextLine, lineDelay);
    }

    addNextLine();
}

// Start boot on page load
window.addEventListener('DOMContentLoaded', runBootAnimation);

// ===================== MATRIX RAIN EFFECT =====================
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*()_+-=[]{}|;:,.<>?/~`';
const charArray = chars.split('');
const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = [];

function initDrops() {
    columns = Math.floor(canvas.width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
}
initDrops();

function getMatrixColor() {
    const theme = document.documentElement.getAttribute('data-theme') || 'hacker';
    const colors = {
        hacker: '#00FF88', cyberpunk: '#FF00FF', matrix: '#39FF14',
        dracula: '#50FA7B', nord: '#88C0D0'
    };
    return colors[theme] || '#00FF88';
}

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getMatrixColor();
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
    }
}

let matrixInterval = setInterval(drawMatrix, 35);

// ===================== PORTFOLIO DATA =====================
const portfolioData = {
    about: {
        name: "ADNAN PATHAN",
        title: "DevOps Engineer | Cloud Engineer | Site Reliability Engineer",
        bio: `AWS-certified DevOps Engineer with 1.5+ years of experience in cloud infrastructure management, Kubernetes orchestration, and Linux automation. Proven track record of deploying containerized workloads on AWS EKS, managing VPC networking, and building CI/CD pipelines with Jenkins and ArgoCD. Hands-on experience with Terraform for IaC and Prometheus/Grafana for observability.`,
        skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Ansible", "Python", "Linux", "Git", "CI/CD", "Security", "Monitoring", "Bash", "Grafana", "Prometheus", "ArgoCD"],
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect width='200' height='200' fill='%230f0f0f'/%3E%3Crect x='10' y='10' width='180' height='180' fill='none' stroke='%2300FF88' stroke-width='2' stroke-dasharray='6,4'/%3E%3Ctext x='100' y='95' text-anchor='middle' fill='%23FF6B35' font-size='22' font-weight='bold' font-family='monospace'%3EADNAN%3C/text%3E%3Ctext x='100' y='125' text-anchor='middle' fill='%2300FF88' font-size='14' font-family='monospace'%3EDevOps Eng%3C/text%3E%3C/svg%3E"
    },
    education: [
        {
            degree: "Bsc. Computer Science",
            institution: "Savitri Bai Phule Pune University - Pune",
            year: "2022 - 2025",
            score: "8.9 / 10 CGPA",
            focus: "Cloud Computing, Network Security, DevOps"
        }
    ],
    experience: [
        {
            role: "DevOps Engineer",
            company: "Devlogic Solutions",
            period: "2025 - Present",
            achievements: [
                "Provisioned 10+ EC2 instances across multiple VPCs with public/private subnet segmentation, security group rules, and IAM roles with least-privilege policies.",
                "Deployed ALB to distribute inbound traffic across EC2 targets; configured CloudWatch alarms on CPU utilization (90% threshold) and disk usage for proactive incident response.",
                "Authored Bash scripts for automated process monitoring, server health checks, and scheduled S3 backup operations on Linux servers.",
                "Applied Kubernetes rolling update manifests on AWS EKS to maintain zero-downtime deployments during application release cycles.",
                "Supported HPA configuration on EKS cluster with CPU-based scaling policies to handle variable traffic loads."
            ]
        }
    ],
    projects: [
        {
            name: "AWS EKS GitOps Pipeline",
            desc: [
                "Infrastructure Automation: Reduced setup time by 30% using Terraform to provision EKS clusters, VPCs, subnets, and security groups on AWS.",
                "CI/CD Pipeline: Achieved a 95% deployment success rate with zero downtime by implementing a Jenkins-driven pipeline to build Docker images, push them to Amazon ECR, and trigger ArgoCD synchronization.",
                "GitOps Integration: Reduced manual intervention by 80% using ArgoCD for automatic synchronization between GitHub Kubernetes manifests and the EKS cluster.",
                "Monitoring & Alerting: Improved issue detection time by 40% with Prometheus metrics collection, Grafana dashboards, and email alerts for critical events.",
                "Impact: Achieved 99.9% deployment reliability, improved scalability, and reduced manual operational effort by 90%."
            ],
            tech: ["AWS", "EKS", "Terraform", "Docker", "Jenkins", "ArgoCD", "Prometheus", "Grafana"],
            stars: "⭐⭐⭐⭐⭐"
        },
        {
            name: "DevSecOps Jenkins CI/CD Pipeline",
            desc: [
                "Deployed Jenkins CI/CD server on AWS EC2, automating end-to-end build, test, and deployment pipeline for a Node.js application.",
                "Integrated SonarQube (SAST) for code quality gates, ensuring zero critical vulnerabilities passed to production.",
                "Implemented OWASP Dependency-Check to identify and remediate known CVEs in third-party libraries.",
                "Configured Trivy for container image scanning; pushed hardened Docker images to Amazon ECR for secure versioned deployments."
            ],
            tech: ["Jenkins", "AWS", "SonarQube", "GCP", "OWASP", "Trivy", "Docker", "Node.js"],
            stars: "⭐⭐⭐⭐⭐"
        },
        {
            name: "Real-Time Chat Application",
            desc: [
                "Designed and developed a real-time chat application using Node.js, Socket.IO, MySQL, Redis, HTML, CSS, and JavaScript.",
                "Implemented secure user authentication with support for multiple chat rooms and one-to-one private messaging.",
                "Enabled low-latency bidirectional communication using Socket.IO, delivering instant message synchronization across connected users.",
                "Integrated MySQL for persistent chat history and Redis for session management and improved application performance.",
                "Built a responsive and intuitive frontend, providing a seamless user experience across desktop and mobile devices."
            ],
            tech: ["Node.js", "Socket.IO", "JavaScript", "HTML", "CSS", "MySQL", "Redis"],
            github: "https://github.com/iadnan172/Chat-Room.git",
            stars: "⭐⭐⭐⭐⭐"
        }
    ],
    contact: {
        email: "work.adnanpathan@gmail.com",
        github: "https://github.com/iadnan172",
        linkedin: "https://www.linkedin.com/in/adnan-p-47a68a249/"
    },
    // ── Skill bars data (name → percentage) ──
    skillBars: [
        { name: "Docker",        pct: 92 },
        { name: "Kubernetes",    pct: 88 },
        { name: "AWS",           pct: 90 },
        { name: "Terraform",     pct: 82 },
        { name: "Jenkins",       pct: 85 },
        { name: "Ansible",       pct: 75 },
        { name: "Python",        pct: 70 },
        { name: "Linux / Bash",  pct: 93 },
        { name: "ArgoCD",        pct: 80 },
        { name: "Prometheus",    pct: 78 },
        { name: "Grafana",       pct: 78 },
        { name: "Git / CI/CD",   pct: 90 },
    ]
};

// ===================== DOM REFS =====================
const terminalBody    = document.getElementById('terminalBody');
const terminalOutput  = document.getElementById('terminalOutput');
const commandInput    = document.getElementById('commandInput');
const currentTimeEl   = document.getElementById('currentTime');

// ===================== CLOCK =====================
function updateTime() {
    const now = new Date();
    currentTimeEl.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// ===================== KEYBOARD SOUND ENGINE =====================
const TYPING_SOUND_VOLUME = 0.18;
let audioCtx = null;
let isSoundMuted = localStorage.getItem('terminalSoundMuted') === 'true';
let keyClickBuffer = null;

function getAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function initAudioOnFirstUserInteraction() {
    const resume = () => {
        getAudioContext();
        if (!keyClickBuffer && audioCtx) createMechanicalKeyClickBuffer();
        document.removeEventListener('click', resume);
        document.removeEventListener('keydown', resume);
        document.removeEventListener('touchstart', resume);
    };
    document.addEventListener('click', resume, { once: true });
    document.addEventListener('keydown', resume, { once: true });
    document.addEventListener('touchstart', resume, { once: true });
}
initAudioOnFirstUserInteraction();

function createMechanicalKeyClickBuffer() {
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
            channel[i] = (noise * 0.5 + clickSine * 0.35 + bodyThud * 0.15);
        }
        keyClickBuffer = buffer;
    } catch (e) {}
}

function playMechanicalKeySound(key) {
    if (isSoundMuted) return;
    try {
        const ctx = getAudioContext();
        if (!keyClickBuffer) createMechanicalKeyClickBuffer();
        if (!keyClickBuffer) return;
        const source   = ctx.createBufferSource();
        const gainNode = ctx.createGain();
        source.buffer  = keyClickBuffer;
        let rate = 0.95 + Math.random() * 0.1;
        if (key === 'Enter')                          rate = 0.75;
        else if (key === 'Backspace' || key === 'Delete') rate = 0.85;
        else if (key === ' ')                         rate = 0.80;
        source.playbackRate.value = rate;
        gainNode.gain.value = TYPING_SOUND_VOLUME;
        source.connect(gainNode);
        gainNode.connect(ctx.destination);
        source.start(0);
    } catch (e) {}
}

const soundToggleBtn = document.getElementById('soundToggle');
const soundIcon      = document.getElementById('soundIcon');

function updateSoundToggleUI() {
    if (!soundToggleBtn || !soundIcon) return;
    if (isSoundMuted) {
        soundIcon.textContent = '🔇';
        soundToggleBtn.classList.add('muted');
        soundToggleBtn.title = 'Typing Sound: MUTED (Click to Unmute)';
    } else {
        soundIcon.textContent = '🔊';
        soundToggleBtn.classList.remove('muted');
        soundToggleBtn.title = 'Typing Sound: ON (Click to Mute)';
    }
}

if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        getAudioContext();
        isSoundMuted = !isSoundMuted;
        localStorage.setItem('terminalSoundMuted', isSoundMuted ? 'true' : 'false');
        updateSoundToggleUI();
        if (!isSoundMuted) playMechanicalKeySound('a');
    });
    updateSoundToggleUI();
}

// ===================== COMMAND HISTORY (Feature 9) =====================
const commandHistory = [];
let historyIndex = -1;

// ===================== HELPERS =====================
function appendOutputElement(el) {
    terminalOutput.appendChild(el);
    setTimeout(() => { terminalBody.scrollTop = terminalBody.scrollHeight; }, 20);
}

function showLoading() {
    const div = document.createElement('div');
    div.className = 'command-line';
    div.innerHTML = '<span class="loading"></span> <span class="output-text">Executing command...</span>';
    terminalOutput.appendChild(div);
    terminalBody.scrollTop = terminalBody.scrollHeight;
    return new Promise(resolve => setTimeout(() => { div.remove(); resolve(); }, 350));
}

function createCommandEntry(cmd) {
    const entry = document.createElement('div');
    entry.className = 'command-entry';
    entry.innerHTML = `
        <div class="command-line">
            <span class="prompt-symbol">adnan@portfolio:~$</span>
            <span class="command-text">${escapeHtml(cmd)}</span>
        </div>
    `;
    return entry;
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ===================== COMMAND: whois adnan / about =====================
async function showAbout() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="about-card">
            <div class="about-info">
                <div class="output-title">Hi, I'm ${portfolioData.about.name}!</div>
                <div class="output-subtitle">⚡ ${portfolioData.about.title}</div>
                <p class="output-paragraph">${portfolioData.about.bio}</p>
                <div class="output-subtitle" style="margin-top: 10px;">🎯 Core Competencies:</div>
                <div class="skill-tags">
                    ${portfolioData.about.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
            </div>
            <div class="profile-image">
                <img src="${portfolioData.about.image}" alt="Adnan Pathan">
            </div>
        </div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: ls =====================
async function showDirectory() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-subtitle">📁 Directory: /home/adnan/portfolio</div>
        <div class="file-grid">
            <div class="file-card" onclick="handleNavigation('education')">
                <div class="file-icon">📚</div>
                <div class="file-name">education/</div>
                <div class="file-desc">Academic Credentials</div>
            </div>
            <div class="file-card" onclick="handleNavigation('experience')">
                <div class="file-icon">💼</div>
                <div class="file-name">experience/</div>
                <div class="file-desc">Work History</div>
            </div>
            <div class="file-card" onclick="handleNavigation('projects')">
                <div class="file-icon">🚀</div>
                <div class="file-name">projects/</div>
                <div class="file-desc">Portfolio Projects</div>
            </div>
            <div class="file-card" onclick="handleNavigation('contact')">
                <div class="file-icon">📧</div>
                <div class="file-name">contact/</div>
                <div class="file-desc">Reach Out</div>
            </div>
            <div class="file-card" onclick="handleNavigation('skills')">
                <div class="file-icon">⚡</div>
                <div class="file-name">skills.txt</div>
                <div class="file-desc">Technical Stack</div>
            </div>
        </div>
        <div class="output-paragraph" style="margin-top: 6px;">💡 Tip: Type <span class="command-text">'cd [folder]'</span> or click any box above to navigate.</div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: education =====================
async function showEducation() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-title">🎓 ACADEMIC BACKGROUND</div>
        <div class="timeline-list">
            ${portfolioData.education.map(edu => `
                <div class="timeline-card">
                    <div class="timeline-header-line">
                        <span class="timeline-role">${edu.degree}</span>
                        <span class="timeline-date">📅 ${edu.year}</span>
                    </div>
                    <div class="timeline-institution">🏫 ${edu.institution}</div>
                    <div class="output-paragraph" style="margin: 0;">📊 Score: <strong>${edu.score}</strong></div>
                    <div class="output-paragraph" style="margin: 0;">🎯 Key Focus: ${edu.focus}</div>
                </div>
            `).join('')}
        </div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: experience =====================
async function showExperience() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-title">💼 PROFESSIONAL EXPERIENCE</div>
        <div class="timeline-list">
            ${portfolioData.experience.map(exp => `
                <div class="timeline-card">
                    <div class="timeline-header-line">
                        <span class="timeline-role">${exp.role}</span>
                        <span class="timeline-date">📅 ${exp.period}</span>
                    </div>
                    <div class="timeline-institution">🏢 ${exp.company}</div>
                    <ul class="bullet-list">
                        ${exp.achievements.map(a => `<li class="bullet-item">${a}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: projects =====================
async function showProjects() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-title">🚀 FEATURED PROJECTS</div>
        <div class="timeline-list">
            ${portfolioData.projects.map(p => `
                <div class="timeline-card">
                    <div class="timeline-header-line">
                        <span class="timeline-role">${p.name}</span>
                        <span class="timeline-date">${p.stars}</span>
                    </div>
                    <ul class="bullet-list">
                        ${p.desc.map(d => `<li class="bullet-item">${d}</li>`).join('')}
                    </ul>
                    <div class="skill-tags" style="margin-top: 8px;">
                        ${p.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                    </div>
                    ${p.github ? `
                        <div class="project-links">
                            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">🔗 GitHub Repository</a>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: contact =====================
async function showContact() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-title">📧 CONTACT INFORMATION</div>
        <div class="timeline-card">
            <div class="output-paragraph">📧 Email: <a href="mailto:${portfolioData.contact.email}" class="command-text">${portfolioData.contact.email}</a></div>
            <div class="output-paragraph">🐙 GitHub: <a href="${portfolioData.contact.github}" target="_blank" class="command-text">${portfolioData.contact.github}</a></div>
            <div class="output-paragraph">💼 LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank" class="command-text">${portfolioData.contact.linkedin}</a></div>
        </div>
        <div class="output-paragraph" style="margin-top: 6px;">💡 Type <span class="command-text">'send-message'</span> to send me a message directly from here!</div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: skills (Feature 1 — Animated Skill Bars) =====================
async function showSkills() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';

    const barsHtml = portfolioData.skillBars.map(s => `
        <div class="skill-bar-row">
            <span class="skill-bar-label">${s.name}</span>
            <div class="skill-bar-track">
                <div class="skill-bar-fill" data-pct="${s.pct}"></div>
            </div>
            <span class="skill-bar-pct">${s.pct}%</span>
        </div>
    `).join('');

    block.innerHTML = `
        <div class="output-title">⚡ TECHNICAL SKILLS MATRIX</div>
        <div class="timeline-card">
            <div class="skill-bars-container">${barsHtml}</div>
        </div>
        <div class="timeline-card">
            <div class="output-subtitle">Cloud & Infrastructure:</div>
            <div class="skill-tags">
                <span class="skill-tag">AWS (EC2, EKS, VPC, S3, IAM, ALB, ECR)</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">Kubernetes</span>
                <span class="skill-tag">Terraform</span>
                <span class="skill-tag">Ansible</span>
            </div>
            <div class="output-subtitle" style="margin-top: 10px;">CI/CD & Observability:</div>
            <div class="skill-tags">
                <span class="skill-tag">Jenkins</span>
                <span class="skill-tag">ArgoCD</span>
                <span class="skill-tag">Prometheus</span>
                <span class="skill-tag">Grafana</span>
                <span class="skill-tag">SonarQube</span>
                <span class="skill-tag">Trivy</span>
            </div>
        </div>
    `;

    appendOutputElement(block);

    // Animate bars after render
    requestAnimationFrame(() => {
        block.querySelectorAll('.skill-bar-fill').forEach(bar => {
            const pct = bar.getAttribute('data-pct');
            setTimeout(() => { bar.style.width = pct + '%'; }, 100);
        });
    });
}

// ===================== COMMAND: help =====================
async function showHelp() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-title">📚 AVAILABLE COMMANDS</div>
        <div class="timeline-card">
            <div class="help-grid">
                <span class="help-cmd">whois adnan</span><span class="help-desc">Display detailed bio & overview</span>
                <span class="help-cmd">ls</span><span class="help-desc">List portfolio sections and files</span>
                <span class="help-cmd">cd [folder]</span><span class="help-desc">Navigate: education | experience | projects | contact | skills</span>
                <span class="help-cmd">cat [file]</span><span class="help-desc">View file contents (e.g. cat skills.txt)</span>
                <span class="help-cmd">skills</span><span class="help-desc">Show animated skill progress bars</span>
                <span class="help-cmd">stats</span><span class="help-desc">Fetch live GitHub stats via API</span>
                <span class="help-cmd">resume / cv</span><span class="help-desc">Directly download my resume PDF</span>
                <span class="help-cmd">theme --list</span><span class="help-desc">List available color themes</span>
                <span class="help-cmd">theme [name]</span><span class="help-desc">Switch theme: hacker | cyberpunk | matrix | dracula | nord</span>
                <span class="help-cmd">send-message / email</span><span class="help-desc">Send me a message directly from the terminal</span>
                <span class="help-cmd">ssh adnan</span><span class="help-desc">Simulate SSH connection (easter egg 🥚)</span>
                <span class="help-cmd">ping adnan</span><span class="help-desc">Simulate network ping & open Gmail compose</span>
                <span class="help-cmd">neofetch</span><span class="help-desc">Display system info overview</span>
                <span class="help-cmd">matrix</span><span class="help-desc">Toggle matrix rain background</span>
                <span class="help-cmd">clear / cls</span><span class="help-desc">Clear screen output buffer</span>
                <span class="help-cmd">help</span><span class="help-desc">Show this command menu</span>
            </div>
            <div class="output-paragraph" style="margin-top: 10px;">💡 Tip: Press <span class="command-text">Tab</span> to autocomplete | <span class="command-text">↑↓</span> to browse history</div>
        </div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: neofetch =====================
async function showNeofetch() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-paragraph"><span class="highlight">User:</span> adnan@devops</div>
        <div class="output-paragraph"><span class="highlight">Role:</span> DevOps Engineer</div>
        <div class="output-paragraph"><span class="highlight">Experience:</span> 1.5+ years</div>
        <div class="output-paragraph"><span class="highlight">Cloud:</span> AWS</div>
        <div class="output-paragraph"><span class="highlight">Orchestration:</span> Kubernetes / EKS</div>
        <div class="output-paragraph"><span class="highlight">Containers:</span> Docker</div>
        <div class="output-paragraph"><span class="highlight">Infrastructure:</span> Terraform / Ansible</div>
        <div class="output-paragraph"><span class="highlight">CI/CD:</span> Jenkins / GitHub Actions</div>
        <div class="output-paragraph"><span class="highlight">GitOps:</span> ArgoCD</div>
        <div class="output-paragraph"><span class="highlight">Monitoring:</span> Prometheus / Grafana</div>
        <div class="output-paragraph"><span class="highlight">Automation:</span> 90% less manual intervention</div>
        <div class="output-paragraph"><span class="highlight">Availability:</span> Immediate Joiner</div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: ping adnan =====================
async function pingAdnan() {
    await showLoading();
    const recipientEmail = portfolioData.contact.email;
    const emailSubject = "Portfolio Contact - Let's Connect";
    const emailBody = "Hi Adnan,\n\nI came across your portfolio website and would like to connect with you regarding an opportunity.";
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    const desktopGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodedSubject}&body=${encodedBody}`;
    const mobileMailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    if (isMobile) { window.location.href = mobileMailtoUrl; }
    else { window.open(desktopGmailUrl, '_blank'); }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = isMobile ? `🚀 Opening mail app for ${recipientEmail}...` : `🚀 Opening Gmail compose for ${recipientEmail}...`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);

    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="timeline-card">
            <div class="info-text">PING adnan@portfolio.dev (192.168.1.100)</div>
            <div class="output-text">64 bytes from ${recipientEmail}: icmp_seq=1 ttl=64 time=0.038 ms</div>
            <div class="output-text">64 bytes from ${recipientEmail}: icmp_seq=2 ttl=64 time=0.041 ms</div>
            <div class="output-text">64 bytes from ${recipientEmail}: icmp_seq=3 ttl=64 time=0.035 ms</div>
            <div class="success" style="margin-top: 8px;">✅ Connection established! Opening mail client 🚀</div>
            <div class="output-paragraph" style="margin-top: 8px;">
                📧 If compose didn't open: <a href="${isMobile ? mobileMailtoUrl : desktopGmailUrl}" target="_blank" rel="noopener" class="project-link" style="display:inline-flex;margin-left:4px;">Click here to compose email</a>
            </div>
        </div>
    `;
    appendOutputElement(block);
}

// ===================== COMMAND: skills (bars) — handled in showSkills above =====================

// ===================== COMMAND: stats (Feature 5 — GitHub Stats) =====================
async function showGitHubStats() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';

    const fetchingDiv = document.createElement('div');
    fetchingDiv.className = 'output-block';
    fetchingDiv.innerHTML = '<div class="info-text">📡 Fetching GitHub stats from api.github.com...</div>';
    appendOutputElement(fetchingDiv);

    try {
        const [userRes, reposRes] = await Promise.all([
            fetch('https://api.github.com/users/iadnan172'),
            fetch('https://api.github.com/users/iadnan172/repos?per_page=100')
        ]);

        fetchingDiv.remove();

        if (!userRes.ok) throw new Error('API rate limit or network error');

        const user  = await userRes.json();
        const repos = await reposRes.json();

        const totalStars = Array.isArray(repos) ? repos.reduce((sum, r) => sum + r.stargazers_count, 0) : 0;
        const totalForks = Array.isArray(repos) ? repos.reduce((sum, r) => sum + r.forks_count, 0) : 0;
        const langs     = Array.isArray(repos) ? [...new Set(repos.map(r => r.language).filter(Boolean))].slice(0, 6) : [];

        block.innerHTML = `
            <div class="output-title">📊 GITHUB STATS — @iadnan172</div>
            <div class="stats-grid">
                <div class="stat-card">
                    <span class="stat-number">${user.public_repos}</span>
                    <div class="stat-label">📦 Public Repos</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${user.followers}</span>
                    <div class="stat-label">👥 Followers</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${user.following}</span>
                    <div class="stat-label">➡️ Following</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${totalStars}</span>
                    <div class="stat-label">⭐ Total Stars</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${totalForks}</span>
                    <div class="stat-label">🍴 Total Forks</div>
                </div>
                <div class="stat-card">
                    <span class="stat-number">${user.public_gists || 0}</span>
                    <div class="stat-label">📝 Gists</div>
                </div>
            </div>
            <div class="timeline-card" style="margin-top:4px;">
                <div class="output-subtitle">🗓️ Member Since: <span class="output-text">${new Date(user.created_at).getFullYear()}</span></div>
                ${langs.length ? `<div class="output-subtitle" style="margin-top:8px;">💻 Languages Used:</div>
                <div class="skill-tags">${langs.map(l => `<span class="skill-tag">${l}</span>`).join('')}</div>` : ''}
                <div class="output-paragraph" style="margin-top:8px;">🔗 Profile: <a href="${portfolioData.contact.github}" target="_blank" class="command-text">${portfolioData.contact.github}</a></div>
            </div>
        `;
        appendOutputElement(block);
    } catch (err) {
        fetchingDiv.remove();
        block.innerHTML = `
            <div class="timeline-card">
                <div class="error-text">❌ Failed to fetch GitHub stats. (Rate limit or network issue)</div>
                <div class="output-paragraph">🔗 Visit directly: <a href="${portfolioData.contact.github}" target="_blank" class="command-text">${portfolioData.contact.github}</a></div>
            </div>
        `;
        appendOutputElement(block);
    }
}

// ===================== COMMAND: resume (Feature 8) =====================
async function showResume() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';

    // Local resume PDF path for direct browser download
    const RESUME_URL = 'resume.pdf';

    block.innerHTML = `
        <div class="output-title">📄 RESUME DOWNLOAD</div>
        <div class="timeline-card">
            <div class="output-text">📄 Preparing resume download...</div>
            <div class="resume-progress">
                <div class="resume-progress-bar-track">
                    <div class="resume-progress-bar-fill" id="resumeBar"></div>
                </div>
                <div class="output-text" id="resumePct">0%</div>
            </div>
            <div class="success" id="resumeReady" style="display:none;">✅ Download started: ADNAN_PATHAN_RESUME.pdf</div>
            <div id="resumeBtnWrap" style="display:none; margin-top:8px;">
                <a href="${RESUME_URL}" download="ADNAN_PATHAN_RESUME.pdf" class="resume-download-btn">📥 Download Resume (PDF)</a>
            </div>
        </div>
    `;
    appendOutputElement(block);

    // Animate progress bar
    const bar = block.querySelector('#resumeBar');
    const pct = block.querySelector('#resumePct');
    const ready = block.querySelector('#resumeReady');
    const btnWrap = block.querySelector('#resumeBtnWrap');

    let current = 0;
    const interval = setInterval(() => {
        current += Math.random() * 25 + 15;
        if (current >= 100) {
            current = 100;
            clearInterval(interval);
            ready.style.display = 'block';
            btnWrap.style.display = 'block';

            // Trigger direct file download without opening Google Drive or external tabs
            const link = document.createElement('a');
            link.href = RESUME_URL;
            link.download = 'ADNAN_PATHAN_RESUME.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        bar.style.width = current + '%';
        pct.textContent = Math.floor(current) + '%';
    }, 80);
}

// ===================== COMMAND: ssh adnan (Feature 4 — Easter Egg) =====================
async function showSSH() {
    await showLoading();
    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = '<div class="timeline-card" id="sshCard"></div>';
    appendOutputElement(block);

    const card = block.querySelector('#sshCard');
    const sshLines = [
        { text: '$ ssh adnan@devops.cloud -p 22', cls: 'command-text' },
        { text: 'SSH: Resolving hostname devops.cloud...', cls: 'info-text', delay: 300 },
        { text: 'SSH: Initiating TCP connection to 34.102.214.87:22', cls: 'info-text', delay: 400 },
        { text: 'SSH: Performing key exchange (curve25519-sha256)...', cls: 'output-text', delay: 700 },
        { text: 'SSH: Authenticating with public key "id_ed25519"', cls: 'output-text', delay: 600 },
        { text: '🔐 Welcome Adnan! Last login: ' + new Date().toDateString() + ' from 192.168.x.x', cls: 'success', delay: 800 },
        { text: '', cls: 'info-text', delay: 100 },
        { text: '  ╔══════════════════════════════════════╗', cls: 'terminal-green', delay: 100 },
        { text: '  ║   ADNAN PATHAN — DevOps Cloud Server  ║', cls: 'success', delay: 80 },
        { text: '  ║   AWS: us-east-1 | EKS: Running       ║', cls: 'success', delay: 80 },
        { text: '  ║   Uptime: 99.99% | Load: 0.04         ║', cls: 'success', delay: 80 },
        { text: '  ╚══════════════════════════════════════╝', cls: 'terminal-green', delay: 80 },
        { text: '', cls: 'info-text', delay: 100 },
        { text: '$ Connection closed. Type \'contact\' to actually reach me! 😄', cls: 'warning-text', delay: 600 },
    ];

    let delay = 0;
    sshLines.forEach(line => {
        delay += line.delay || 300;
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = `ssh-line ${line.cls}`;
            div.style.animationDelay = '0ms';
            div.textContent = line.text;
            card.appendChild(div);
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }, delay);
    });
}

// ===================== COMMAND: send-message (Feature 6 — Contact Form) =====================
let isInSendMessageFlow = false;
let sendMessageStep = 0;
let sendMessageData = {};

async function startSendMessage() {
    await showLoading();
    isInSendMessageFlow = true;
    sendMessageStep = 0;
    sendMessageData = {};

    const block = document.createElement('div');
    block.className = 'output-block';
    block.innerHTML = `
        <div class="output-title">📧 SEND MESSAGE — Terminal Form</div>
        <div class="timeline-card" id="sendMsgCard">
            <div class="form-status-line">Connecting to mail server... <span class="success">✅ Connected</span></div>
            <div class="form-status-line" style="margin-top:6px;" id="formPrompt">
                <span class="command-text">Step 1/3</span> — Enter your <span class="highlight">name</span>:
            </div>
        </div>
        <div class="output-paragraph" style="margin-top:4px; font-size:0.85em; opacity:0.85;">💡 Tip: Press <span class="command-text">Esc</span> to cancel at any time.</div>
    `;
    appendOutputElement(block);
    commandInput.placeholder = 'Your name... (Press Esc to cancel)';
}

async function handleSendMessageStep(value) {
    if (!isInSendMessageFlow) return false;
    const card = document.querySelector('#sendMsgCard');

    if (sendMessageStep === 0) {
        sendMessageData.name = value;
        sendMessageStep = 1;
        if (card) {
            const line = document.createElement('div');
            line.className = 'form-status-line';
            line.innerHTML = `<span class="success">✔</span> Name: <span class="highlight">${escapeHtml(value)}</span>`;
            card.appendChild(line);

            const prompt = card.querySelector('#formPrompt');
            if (prompt) prompt.innerHTML = `<span class="command-text">Step 2/3</span> — Enter your <span class="highlight">email</span>:`;
        }
        commandInput.placeholder = 'Your email...';
        return true;
    }

    if (sendMessageStep === 1) {
        sendMessageData.email = value;
        sendMessageStep = 2;
        if (card) {
            const line = document.createElement('div');
            line.className = 'form-status-line';
            line.innerHTML = `<span class="success">✔</span> Email: <span class="highlight">${escapeHtml(value)}</span>`;
            card.appendChild(line);

            const prompt = card.querySelector('#formPrompt');
            if (prompt) prompt.innerHTML = `<span class="command-text">Step 3/3</span> — Enter your <span class="highlight">message</span>:`;
        }
        commandInput.placeholder = 'Your message...';
        return true;
    }

    if (sendMessageStep === 2) {
        sendMessageData.message = value;
        sendMessageStep = 3;
        isInSendMessageFlow = false;
        commandInput.placeholder = 'Enter command... (Tab to autocomplete)';

        if (card) {
            const line = document.createElement('div');
            line.className = 'form-status-line';
            line.innerHTML = `<span class="success">✔</span> Message recorded.`;
            card.appendChild(line);

            const sendingLine = document.createElement('div');
            sendingLine.className = 'form-status-line';
            sendingLine.innerHTML = `<span class="loading"></span> Sending message to ${portfolioData.contact.email}...`;
            card.appendChild(sendingLine);
        }

        const recipientEmail = portfolioData.contact.email;
        let isSuccess = false;

        // Try API submission if formspree/web3forms configured
        try {
            const formEndpoint = portfolioData.contact.formspreeUrl || 'https://api.web3forms.com/submit';
            const payload = portfolioData.contact.formspreeUrl ? {
                name: sendMessageData.name,
                email: sendMessageData.email,
                message: sendMessageData.message
            } : {
                access_key: portfolioData.contact.web3formsKey || '0da2f0d9-482a-4318-ba28-3e473e16b9b3',
                subject: `Portfolio Message from ${sendMessageData.name}`,
                from_name: sendMessageData.name,
                email: sendMessageData.email,
                message: sendMessageData.message
            };

            const res = await fetch(formEndpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (res.ok) {
                const json = await res.json();
                if (json.success !== false) {
                    isSuccess = true;
                }
            }
        } catch (e) {
            isSuccess = false;
        }

        const sendingLine = card ? card.querySelector('.form-status-line:last-child') : null;
        if (sendingLine) sendingLine.remove();

        const subject = encodeURIComponent(`Portfolio Message from ${sendMessageData.name}`);
        const body = encodeURIComponent(`Sender Name: ${sendMessageData.name}\nSender Email: ${sendMessageData.email}\n\nMessage:\n${sendMessageData.message}`);
        const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

        if (isSuccess) {
            if (card) {
                const done = document.createElement('div');
                done.className = 'success';
                done.style.marginTop = '8px';
                done.innerHTML = `✅ Message sent successfully! I'll get back to you soon. 🚀`;
                card.appendChild(done);

                const toast = document.createElement('div');
                toast.className = 'toast';
                toast.innerHTML = `📨 Message sent from ${escapeHtml(sendMessageData.name)}!`;
                document.body.appendChild(toast);
                setTimeout(() => toast.remove(), 4000);
            }
        } else {
            // Auto open mail client with pre-filled details so message is NEVER lost
            window.location.href = mailtoUrl;

            if (card) {
                const done = document.createElement('div');
                done.className = 'success';
                done.style.marginTop = '8px';
                done.innerHTML = `✅ Opening mail client for <strong>${recipientEmail}</strong>!<br>
                <div class="output-paragraph" style="margin-top:6px;">If your mail app didn't open: <a href="${mailtoUrl}" class="command-text" style="text-decoration:underline;">Click here to send email directly</a></div>`;
                card.appendChild(done);
            }
        }

        return true;
    }

    return false;
}

// ===================== COMMAND: theme (Feature 7) =====================
async function handleTheme(args) {
    await showLoading();
    const themes = ['hacker', 'cyberpunk', 'matrix', 'dracula', 'nord'];

    if (!args || args === '--list') {
        const block = document.createElement('div');
        block.className = 'output-block';
        block.innerHTML = `
            <div class="output-title">🎨 AVAILABLE THEMES</div>
            <div class="timeline-card">
                <div class="help-grid">
                    <span class="help-cmd">hacker</span><span class="help-desc">⚡ Classic green-on-black (default)</span>
                    <span class="help-cmd">cyberpunk</span><span class="help-desc">🌆 Purple & neon pink futuristic</span>
                    <span class="help-cmd">matrix</span><span class="help-desc">🔮 Bright neon green matrix style</span>
                    <span class="help-cmd">dracula</span><span class="help-desc">🧛 Dracula dark purple & teal</span>
                    <span class="help-cmd">nord</span><span class="help-desc">❄️ Cool arctic blue & grey</span>
                </div>
                <div class="output-paragraph" style="margin-top:8px;">Usage: <span class="command-text">theme cyberpunk</span></div>
            </div>
        `;
        appendOutputElement(block);
        return;
    }

    const theme = args.toLowerCase().trim();
    if (!themes.includes(theme)) {
        const block = document.createElement('div');
        block.className = 'output-block';
        block.innerHTML = `<div class="error-text">❌ Unknown theme: "${escapeHtml(theme)}". Type <span class="command-text">theme --list</span> to see available themes.</div>`;
        appendOutputElement(block);
        return;
    }

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolioTheme', theme);

    const block = document.createElement('div');
    block.className = 'output-block';
    const themeEmojis = { hacker: '⚡', cyberpunk: '🌆', matrix: '🔮', dracula: '🧛', nord: '❄️' };
    block.innerHTML = `
        <div class="timeline-card">
            <div class="success">${themeEmojis[theme]} Switching to <strong>${theme.toUpperCase()}</strong> theme... Done!</div>
            <div class="output-text">Theme preference saved for next visit.</div>
        </div>
    `;
    appendOutputElement(block);
}

// Restore saved theme on load
(function restoreTheme() {
    const saved = localStorage.getItem('portfolioTheme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
})();

// ===================== NAVIGATION HELPER =====================
function handleNavigation(folder) {
    commandInput.value = `cd ${folder}`;
    processCommand(`cd ${folder}`);
}
window.handleNavigation = handleNavigation;

// ===================== MAIN COMMAND PROCESSOR =====================
async function processCommand(commandStr) {
    const rawCommand = commandStr.trim();
    if (!rawCommand) return;

    // Check if we're in a multi-step flow first
    if (isInSendMessageFlow) {
        const entry = createCommandEntry(rawCommand);
        terminalOutput.appendChild(entry);
        terminalBody.scrollTop = terminalBody.scrollHeight;
        await handleSendMessageStep(rawCommand);
        return;
    }

    const command = rawCommand.toLowerCase();

    // Save to history
    commandHistory.push(rawCommand);
    historyIndex = commandHistory.length;

    // Add prompt line to output buffer
    const entry = createCommandEntry(rawCommand);
    terminalOutput.appendChild(entry);
    terminalBody.scrollTop = terminalBody.scrollHeight;

    switch (true) {
        case command === 'whois adnan' || command === 'about':
            await showAbout();
            break;

        case command === 'ls':
            await showDirectory();
            break;

        case command.startsWith('cd '): {
            const folder = command.substring(3).trim();
            switch (folder) {
                case 'education':  await showEducation();  break;
                case 'experience': await showExperience(); break;
                case 'projects':   await showProjects();   break;
                case 'contact':    await showContact();    break;
                case 'skills':     await showSkills();     break;
                case '..':         await showDirectory();  break;
                default: {
                    const e = document.createElement('div');
                    e.className = 'output-block';
                    e.innerHTML = `<div class="error-text">cd: no such directory: ${escapeHtml(folder)}</div>`;
                    appendOutputElement(e);
                }
            }
            break;
        }

        case command.startsWith('cat '): {
            const file = command.substring(4).trim();
            switch (file) {
                case 'education.txt':  case 'education':  await showEducation();  break;
                case 'experience.txt': case 'experience': await showExperience(); break;
                case 'projects.txt':   case 'projects':   await showProjects();   break;
                case 'contact.txt':    case 'contact':    await showContact();    break;
                case 'skills.txt':     case 'skills':     await showSkills();     break;
                default: {
                    const e = document.createElement('div');
                    e.className = 'output-block';
                    e.innerHTML = `<div class="error-text">cat: ${escapeHtml(file)}: No such file</div>`;
                    appendOutputElement(e);
                }
            }
            break;
        }

        case command === 'skills':
            await showSkills();
            break;

        case command === 'stats':
            await showGitHubStats();
            break;

        case command === 'resume' || command === 'cv' || command === 'download-resume':
            await showResume();
            break;

        case command === 'send-message' || command === 'email' || command === 'mail' || command === 'message':
            await startSendMessage();
            break;

        case command === 'ssh adnan' || command === 'ssh':
            await showSSH();
            break;

        case command.startsWith('theme'):
            await handleTheme(rawCommand.substring(5).trim() || '');
            break;

        case command === 'clear' || command === 'cls':
            terminalOutput.innerHTML = '';
            break;

        case command === 'help':
            await showHelp();
            break;

        case command === 'ping adnan' || command === 'ping':
            await pingAdnan();
            break;

        case command === 'neofetch':
            await showNeofetch();
            break;

        case command === 'matrix': {
            const matrixCanvas = document.getElementById('matrixCanvas');
            const isHidden = matrixCanvas.style.display === 'none';
            matrixCanvas.style.display = isHidden ? 'block' : 'none';
            const msg = document.createElement('div');
            msg.className = 'output-block';
            msg.innerHTML = `<div class="info-text">🔮 Matrix rain background: ${isHidden ? 'ENABLED' : 'DISABLED'}</div>`;
            appendOutputElement(msg);
            break;
        }

        default: {
            const e = document.createElement('div');
            e.className = 'output-block';
            e.innerHTML = `<div class="error-text">Command not found: "${escapeHtml(rawCommand)}". Type <span class="command-text">'help'</span> for available commands.</div>`;
            appendOutputElement(e);
        }
    }
}

// ===================== INPUT EVENT LISTENERS =====================
const ALL_COMMANDS = [
    'whois adnan', 'about', 'ls', 'skills', 'stats', 'resume', 'cv', 'download-resume',
    'send-message', 'email', 'mail', 'message', 'ssh adnan', 'ssh', 'ping adnan', 'ping',
    'neofetch', 'matrix', 'clear', 'cls', 'help',
    'theme --list', 'theme hacker', 'theme cyberpunk', 'theme matrix', 'theme dracula', 'theme nord',
    'cd education', 'cd experience', 'cd projects', 'cd contact', 'cd skills',
    'cat skills.txt', 'cat education.txt', 'cat experience.txt', 'cat projects.txt', 'cat contact.txt'
];

commandInput.addEventListener('keydown', function(e) {
    playMechanicalKeySound(e.key);

    if (e.key === 'Escape') {
        if (isInSendMessageFlow) {
            isInSendMessageFlow = false;
            sendMessageStep = 0;
            sendMessageData = {};
            commandInput.placeholder = 'Enter command... (Tab to autocomplete)';
            const block = document.createElement('div');
            block.className = 'output-block';
            block.innerHTML = '<div class="warning-text">⚠️ Message input cancelled.</div>';
            appendOutputElement(block);
        }
        commandInput.value = '';

    } else if (e.key === 'Enter') {
        const val = commandInput.value;
        commandInput.value = '';
        processCommand(val);

    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
            historyIndex--;
            commandInput.value = commandHistory[historyIndex];
        }

    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            commandInput.value = commandHistory[historyIndex];
        } else {
            historyIndex = commandHistory.length;
            commandInput.value = '';
        }

    } else if (e.key === 'Tab') {
        e.preventDefault();
        const value = commandInput.value.toLowerCase();
        const match = ALL_COMMANDS.find(cmd => cmd.startsWith(value) && cmd !== value);
        if (match) commandInput.value = match;
    }
});

// Click terminal body to focus input
document.querySelector('.terminal-container').addEventListener('click', function(e) {
    if (!['INPUT', 'A', 'BUTTON'].includes(e.target.tagName)) {
        commandInput.focus();
    }
});

window.addEventListener('resize', () => {
    resizeCanvas();
    initDrops();
});

// ===================== SET ASCII ART (after DOM ready) =====================
window.addEventListener('DOMContentLoaded', () => {
    const asciiEl = document.getElementById('asciiArt');
    if (asciiEl) asciiEl.textContent = asciiArt;
});
