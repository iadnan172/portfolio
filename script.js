// ASCII Art
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

document.getElementById('asciiArt').textContent = asciiArt;

// Matrix Rain Effect
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

function drawMatrix() {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.06)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF88';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

let matrixInterval = setInterval(drawMatrix, 35);

// Portfolio Data
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
    }
};

const terminalBody = document.getElementById('terminalBody');
const terminalOutput = document.getElementById('terminalOutput');
const commandInput = document.getElementById('commandInput');
const currentTimeElement = document.getElementById('currentTime');

// Update Status Time
function updateTime() {
    const now = new Date();
    currentTimeElement.textContent = now.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime();

// --- Mechanical Keyboard Sound Engine (Web Audio API) ---
const TYPING_SOUND_VOLUME = 0.18; // Master volume constant for typing sound (0.0 to 1.0)
let audioCtx = null;
let isSoundMuted = localStorage.getItem('terminalSoundMuted') === 'true';
let keyClickBuffer = null;

// Initialize audio context safely
function getAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    return audioCtx;
}

// Resume AudioContext on first user interaction for browser autoplay compliance
function initAudioOnFirstUserInteraction() {
    const resumeAudio = () => {
        getAudioContext();
        if (!keyClickBuffer && audioCtx) {
            createMechanicalKeyClickBuffer();
        }
        document.removeEventListener('click', resumeAudio);
        document.removeEventListener('keydown', resumeAudio);
        document.removeEventListener('touchstart', resumeAudio);
    };
    document.addEventListener('click', resumeAudio, { once: true });
    document.addEventListener('keydown', resumeAudio, { once: true });
    document.addEventListener('touchstart', resumeAudio, { once: true });
}
initAudioOnFirstUserInteraction();

// Generate high-quality mechanical click sound buffer
function createMechanicalKeyClickBuffer() {
    try {
        const ctx = getAudioContext();
        const sampleRate = ctx.sampleRate;
        const duration = 0.04; // 40ms crisp mechanical key stroke
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

// Play sound instance per keypress with natural pitch variations
function playMechanicalKeySound(key) {
    if (isSoundMuted) return;
    
    try {
        const ctx = getAudioContext();
        if (!keyClickBuffer) {
            createMechanicalKeyClickBuffer();
        }
        if (!keyClickBuffer) return;

        const source = ctx.createBufferSource();
        const gainNode = ctx.createGain();

        source.buffer = keyClickBuffer;

        // Pitch variations per key type for realistic mechanical key feel
        let playbackRate = 0.95 + Math.random() * 0.1; // Random subtle variation (0.95 - 1.05)
        if (key === 'Enter') {
            playbackRate = 0.75; // Deeper thud for Enter
        } else if (key === 'Backspace' || key === 'Delete') {
            playbackRate = 0.85; // Slightly lower pitch for Backspace
        } else if (key === ' ') {
            playbackRate = 0.80; // Deeper sound for Spacebar
        }

        source.playbackRate.value = playbackRate;
        gainNode.gain.value = TYPING_SOUND_VOLUME;

        source.connect(gainNode);
        gainNode.connect(ctx.destination);

        source.start(0);
    } catch (e) {}
}

// Sound Mute/Unmute Toggle Controller
const soundToggleBtn = document.getElementById('soundToggle');
const soundIcon = document.getElementById('soundIcon');

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
        if (!isSoundMuted) {
            playMechanicalKeySound('a');
        }
    });
    updateSoundToggleUI();
}

// Command history
const commandHistory = [];
let historyIndex = -1;

// Helper to append output node & scroll smoothly
function appendOutputElement(element) {
    terminalOutput.appendChild(element);
    setTimeout(() => {
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }, 20);
}

// Show loading animation
function showLoading() {
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'command-line';
    loadingDiv.innerHTML = '<span class="loading"></span> <span class="output-text">Executing command...</span>';
    terminalOutput.appendChild(loadingDiv);
    terminalBody.scrollTop = terminalBody.scrollHeight;
    
    return new Promise(resolve => {
        setTimeout(() => {
            loadingDiv.remove();
            resolve();
        }, 350);
    });
}

// Create command line entry in history
function createCommandEntry(command) {
    const entry = document.createElement('div');
    entry.className = 'command-entry';
    entry.innerHTML = `
        <div class="command-line">
            <span class="prompt-symbol">adnan@portfolio:~$</span>
            <span class="command-text">${escapeHtml(command)}</span>
        </div>
    `;
    return entry;
}

function escapeHtml(text) {
    return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Command output generators
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
                    ${portfolioData.about.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
            <div class="profile-image">
                <img src="${portfolioData.about.image}" alt="Adnan Pathan">
            </div>
        </div>
    `;
    
    appendOutputElement(block);
}

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
                        ${exp.achievements.map(ach => `<li class="bullet-item">${ach}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
    
    appendOutputElement(block);
}

async function showProjects() {
    await showLoading();
    
    const block = document.createElement('div');
    block.className = 'output-block';
    
    block.innerHTML = `
        <div class="output-title">🚀 FEATURED PROJECTS</div>
        <div class="timeline-list">
            ${portfolioData.projects.map(project => `
                <div class="timeline-card">
                    <div class="timeline-header-line">
                        <span class="timeline-role">${project.name}</span>
                        <span class="timeline-date">${project.stars}</span>
                    </div>
                    <ul class="bullet-list">
                        ${project.desc.map(d => `<li class="bullet-item">${d}</li>`).join('')}
                    </ul>
                    <div class="skill-tags" style="margin-top: 8px;">
                        ${project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('')}
                    </div>
                    ${project.github ? `
                        <div class="project-links">
                            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
                                🔗 GitHub Repository
                            </a>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
    `;
    
    appendOutputElement(block);
}

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
        <div class="output-paragraph" style="margin-top: 6px;">💡 Tip: Type <span class="command-text">'ping adnan'</span> to send a connection signal.</div>
    `;
    
    appendOutputElement(block);
}

async function showSkills() {
    await showLoading();
    
    const block = document.createElement('div');
    block.className = 'output-block';
    
    block.innerHTML = `
        <div class="output-title">⚡ TECHNICAL SKILLS MATRIX</div>
        <div class="timeline-card">
            <div class="output-subtitle">Cloud & DevOps:</div>
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
            <div class="output-subtitle" style="margin-top: 10px;">Scripting & Languages:</div>
            <div class="skill-tags">
                <span class="skill-tag">Bash / Linux Administration</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">JavaScript / Node.js</span>
                <span class="skill-tag">Git</span>
            </div>
        </div>
    `;
    
    appendOutputElement(block);
}

async function showHelp() {
    await showLoading();
    
    const block = document.createElement('div');
    block.className = 'output-block';
    
    block.innerHTML = `
        <div class="output-title">📚 AVAILABLE COMMANDS</div>
        <div class="timeline-card">
            <div class="help-grid">
                <span class="help-cmd">whois adnan</span>
                <span class="help-desc">Display detailed bio & overview</span>
                
                <span class="help-cmd">ls</span>
                <span class="help-desc">List portfolio sections and files</span>
                
                <span class="help-cmd">cd [folder]</span>
                <span class="help-desc">Navigate to section (e.g. cd projects)</span>
                
                <span class="help-cmd">cat [file]</span>
                <span class="help-desc">View file contents (e.g. cat skills.txt)</span>
                
                <span class="help-cmd">ping adnan</span>
                <span class="help-desc">Simulate network ping & contact request</span>
                
                <span class="help-cmd">neofetch</span>
                <span class="help-desc">Display system info overview</span>
                
                <span class="help-cmd">matrix</span>
                <span class="help-desc">Toggle animated Matrix canvas background</span>
                
                <span class="help-cmd">clear</span>
                <span class="help-desc">Clear screen output buffer</span>
                
                <span class="help-cmd">help</span>
                <span class="help-desc">Show this command menu</span>
            </div>
        </div>
    `;
    
    appendOutputElement(block);
}

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

async function pingAdnan() {
    await showLoading();
    
    // Configuration for pre-filled email parameters
    const recipientEmail = portfolioData.contact.email || "pathanadnan079@gmail.com";
    const emailSubject = "Portfolio Contact - Let's Connect";
    const emailBody = "Hi Adnan,\n\nI came across your portfolio website and would like to connect with you regarding an opportunity.";
    
    // Detect mobile device via UserAgent regex or viewport width breakpoint
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
    
    const encodedSubject = encodeURIComponent(emailSubject);
    const encodedBody = encodeURIComponent(emailBody);
    
    // URLs for Desktop (Gmail Web) vs Mobile (Native Mail app via mailto:)
    const desktopGmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipientEmail)}&su=${encodedSubject}&body=${encodedBody}`;
    const mobileMailtoUrl = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;
    
    // Trigger redirect based on device environment
    if (isMobile) {
        window.location.href = mobileMailtoUrl;
    } else {
        window.open(desktopGmailUrl, '_blank');
    }
    
    // Toast Notification
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = isMobile 
        ? `🚀 Opening Gmail / Mail app for ${recipientEmail}...`
        : `🚀 Opening Gmail compose for ${recipientEmail}...`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 4000);
    
    // Terminal Output Block with Fallback Link
    const block = document.createElement('div');
    block.className = 'output-block';
    
    block.innerHTML = `
        <div class="timeline-card">
            <div class="info-text">PING adnan@portfolio.dev (192.168.1.100)</div>
            <div class="output-text">64 bytes from ${recipientEmail}: icmp_seq=1 ttl=64 time=0.038 ms</div>
            <div class="output-text">64 bytes from ${recipientEmail}: icmp_seq=2 ttl=64 time=0.041 ms</div>
            <div class="output-text">64 bytes from ${recipientEmail}: icmp_seq=3 ttl=64 time=0.035 ms</div>
            <div class="success" style="margin-top: 8px;">
                ${isMobile ? "✅ Connection established! Opening Gmail / Mail app 🚀" : "✅ Connection established! Opening mail client 🚀"}
            </div>
            <div class="output-paragraph" style="margin-top: 8px;">
                📧 ${isMobile 
                    ? `If your mail app did not open automatically, <a href="${mobileMailtoUrl}" class="project-link" style="display: inline-flex; margin-left: 4px;">Tap here to compose email</a>`
                    : `If Gmail compose did not open automatically (popup blocked), <a href="${desktopGmailUrl}" target="_blank" rel="noopener noreferrer" class="project-link" style="display: inline-flex; margin-left: 4px;">Click here to compose email</a>`}
            </div>
        </div>
    `;
    
    appendOutputElement(block);
}

function handleNavigation(folder) {
    commandInput.value = `cd ${folder}`;
    processCommand(`cd ${folder}`);
}
window.handleNavigation = handleNavigation;

// Main Command Processor
async function processCommand(commandStr) {
    const rawCommand = commandStr.trim();
    if (!rawCommand) return;
    
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
                case 'education': await showEducation(); break;
                case 'experience': await showExperience(); break;
                case 'projects': await showProjects(); break;
                case 'contact': await showContact(); break;
                case 'skills': await showSkills(); break;
                case '..': await showDirectory(); break;
                default:
                    const errBlock = document.createElement('div');
                    errBlock.className = 'output-block';
                    errBlock.innerHTML = `<div class="error-text">cd: no such directory: ${escapeHtml(folder)}</div>`;
                    appendOutputElement(errBlock);
            }
            break;
        }
        
        case command.startsWith('cat '): {
            const file = command.substring(4).trim();
            switch (file) {
                case 'education.txt': case 'education': await showEducation(); break;
                case 'experience.txt': case 'experience': await showExperience(); break;
                case 'projects.txt': case 'projects': await showProjects(); break;
                case 'contact.txt': case 'contact': await showContact(); break;
                case 'skills.txt': case 'skills': await showSkills(); break;
                default:
                    const errBlock = document.createElement('div');
                    errBlock.className = 'output-block';
                    errBlock.innerHTML = `<div class="error-text">cat: ${escapeHtml(file)}: No such file</div>`;
                    appendOutputElement(errBlock);
            }
            break;
        }
        
        case command === 'clear':
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
            
        case command === 'matrix':
            const matrixCanvas = document.getElementById('matrixCanvas');
            if (matrixCanvas.style.display === 'none') {
                matrixCanvas.style.display = 'block';
                const msg = document.createElement('div');
                msg.className = 'output-block';
                msg.innerHTML = '<div class="info-text">🔮 Matrix rain background: ENABLED</div>';
                appendOutputElement(msg);
            } else {
                matrixCanvas.style.display = 'none';
                const msg = document.createElement('div');
                msg.className = 'output-block';
                msg.innerHTML = '<div class="info-text">🔮 Matrix rain background: DISABLED</div>';
                appendOutputElement(msg);
            }
            break;
            
        default:
            const errBlock = document.createElement('div');
            errBlock.className = 'output-block';
            errBlock.innerHTML = `<div class="error-text">Command not found: "${escapeHtml(rawCommand)}". Type <span class="command-text">'help'</span> for available commands.</div>`;
            appendOutputElement(errBlock);
    }
}

// Input Event Listeners
commandInput.addEventListener('keydown', function(e) {
    playMechanicalKeySound(e.key);
    
    if (e.key === 'Enter') {
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
        const value = commandInput.value;
        if (value.startsWith('cd ')) {
            const partial = value.substring(3).trim();
            const folders = ['education', 'experience', 'projects', 'contact', 'skills'];
            const match = folders.find(f => f.startsWith(partial));
            if (match) {
                commandInput.value = `cd ${match}`;
            }
        }
    }
});

// Click terminal container to focus input
document.querySelector('.terminal-container').addEventListener('click', function(e) {
    if (!['INPUT', 'A', 'BUTTON'].includes(e.target.tagName)) {
        commandInput.focus();
    }
});

window.addEventListener('resize', () => {
    resizeCanvas();
    initDrops();
});

// Focus on startup
commandInput.focus();
