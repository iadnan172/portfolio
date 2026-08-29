import { portfolioData } from "../data/portfolioData";

export function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function aboutHtml() {
  return `
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
        <div class="avatar-frame">
          <span class="avatar-initials">AP</span>
        </div>
      </div>
    </div>
  `;
}

export function directoryHtml() {
  return `
    <div class="output-subtitle">📁 Directory: /home/adnan/portfolio</div>
    <div class="file-grid">
      <div class="file-card" data-nav="education">
        <div class="file-icon">📚</div>
        <div class="file-name">education/</div>
        <div class="file-desc">Academic Credentials</div>
      </div>
      <div class="file-card" data-nav="experience">
        <div class="file-icon">💼</div>
        <div class="file-name">experience/</div>
        <div class="file-desc">Work History</div>
      </div>
      <div class="file-card" data-nav="projects">
        <div class="file-icon">🚀</div>
        <div class="file-name">projects/</div>
        <div class="file-desc">Portfolio Projects</div>
      </div>
      <div class="file-card" data-nav="contact">
        <div class="file-icon">📧</div>
        <div class="file-name">contact/</div>
        <div class="file-desc">Reach Out</div>
      </div>
      <div class="file-card" data-nav="skills">
        <div class="file-icon">⚡</div>
        <div class="file-name">skills.txt</div>
        <div class="file-desc">Technical Stack</div>
      </div>
    </div>
    <div class="output-paragraph" style="margin-top: 6px;">💡 Tip: Type <span class="command-text">'cd [folder]'</span> or click any box above to navigate.</div>
  `;
}

export function educationHtml() {
  return `
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
}

export function experienceHtml() {
  return `
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
}

export function projectsHtml() {
  return `
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
}

export function contactHtml() {
  return `
    <div class="output-title">📧 CONTACT INFORMATION</div>
    <div class="timeline-card">
      <div class="output-paragraph">📧 Email: <a href="mailto:${portfolioData.contact.email}" class="command-text">${portfolioData.contact.email}</a></div>
      <div class="output-paragraph">🐙 GitHub: <a href="${portfolioData.contact.github}" target="_blank" class="command-text">${portfolioData.contact.github}</a></div>
      <div class="output-paragraph">💼 LinkedIn: <a href="${portfolioData.contact.linkedin}" target="_blank" class="command-text">${portfolioData.contact.linkedin}</a></div>
    </div>
    <div class="output-paragraph" style="margin-top: 6px;">💡 Type <span class="command-text">'send-message'</span> to send me a message directly from here!</div>
  `;
}

export function helpHtml() {
  return `
    <div class="output-title">📚 AVAILABLE COMMANDS</div>
    <div class="timeline-card">
      <div class="help-grid">
        <span class="help-cmd">whois adnan</span><span class="help-desc">Display detailed bio & overview</span>
        <span class="help-cmd">ls</span><span class="help-desc">List portfolio sections and files</span>
        <span class="help-cmd">cd [folder]</span><span class="help-desc">Navigate: education | experience | projects | contact | skills</span>
        <span class="help-cmd">cat [file]</span><span class="help-desc">View file contents (e.g. cat skills.txt)</span>
        <span class="help-cmd">skills</span><span class="help-desc">Show animated skill progress bars</span>
        <span class="help-cmd">git log --graph</span><span class="help-desc">Career & education history as git commit tree graph</span>
        <span class="help-cmd">docker ps</span><span class="help-desc">Display active services & projects as running containers</span>
        <span class="help-cmd">btop / htop</span><span class="help-desc">Interactive live CPU, RAM & skill resource monitor</span>
        <span class="help-cmd">stats</span><span class="help-desc">Fetch live GitHub stats via API</span>
        <span class="help-cmd">resume / cv</span><span class="help-desc">Directly download my resume PDF</span>
        <span class="help-cmd">send-message / email</span><span class="help-desc">Send me a message directly from the terminal</span>
        <span class="help-cmd">ssh adnan</span><span class="help-desc">Simulate SSH connection (easter egg 🥚)</span>
        <span class="help-cmd">ping adnan</span><span class="help-desc">Simulate network ping & open Gmail compose</span>
        <span class="help-cmd">neofetch</span><span class="help-desc">Display system info overview</span>
        <span class="help-cmd">clear / cls</span><span class="help-desc">Clear screen output buffer</span>
        <span class="help-cmd">help</span><span class="help-desc">Show this command menu</span>
      </div>
      <div class="output-paragraph" style="margin-top: 10px;">💡 Tip: Press <span class="command-text">Tab</span> to autocomplete | <span class="command-text">↑↓</span> to browse history | Tap top pills on mobile</div>
    </div>
  `;
}

export function neofetchHtml() {
  return `
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
}

export function pingHtml({ recipientEmail, isMobile, mobileMailtoUrl, desktopGmailUrl }) {
  return `
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
}

export function gitLogHtml() {
  return `
    <div class="output-title">🌿 GIT REPOSITORY LOG & CAREER GRAPH</div>
    <div class="timeline-card git-graph-container">
      <div class="git-commit-node">
        <div><span class="git-hash">* commit 8a9f2e1</span> <span class="git-branch">(HEAD -> main, origin/main)</span></div>
        <div class="git-author-date">Author: Adnan Pathan &lt;work.adnanpathan@gmail.com&gt; | 2025 - Present</div>
        <div class="git-commit-title">feat(experience): DevOps Engineer at Devlogic Solutions</div>
        <div class="output-paragraph">• Deployed ALB, EC2, VPCs, IAM security policies, and AWS EKS clusters.</div>
        <div class="output-paragraph">• Configured Prometheus/Grafana monitoring and automated S3 backup pipelines.</div>
      </div>

      <div class="git-commit-node">
        <div><span class="git-hash">* commit 4c3d2b1</span> <span class="git-branch">(tag: v2.0-degree)</span></div>
        <div class="git-author-date">Author: Adnan Pathan &lt;work.adnanpathan@gmail.com&gt; | 2022 - 2025</div>
        <div class="git-commit-title">feat(education): Bsc. Computer Science — SPPU Pune</div>
        <div class="output-paragraph">• Graduated with 8.9 / 10 CGPA. Focused on Cloud Architecture & Network Security.</div>
      </div>

      <div class="git-commit-node">
        <div><span class="git-hash">* commit 1a2b3c4</span> <span class="git-branch">(tag: v1.0-genesis)</span></div>
        <div class="git-author-date">Author: Adnan Pathan &lt;work.adnanpathan@gmail.com&gt; | 2022</div>
        <div class="git-commit-title">initial commit: Initialized DevOps & Linux journey</div>
      </div>
    </div>
  `;
}

export function dockerHtml() {
  return `
    <div class="output-title">🐳 DOCKER CONTAINERS — ACTIVE SERVICES</div>
    <div class="timeline-card">
      <div class="docker-table-wrapper">
        <table class="docker-table">
          <thead>
            <tr>
              <th>CONTAINER ID</th>
              <th>IMAGE</th>
              <th>COMMAND</th>
              <th>STATUS</th>
              <th>PORTS</th>
              <th>NAMES</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="docker-id">a8f9102c4b</td>
              <td class="docker-image">adnan/devlogic-infra:v2.5</td>
              <td>"terraform apply"</td>
              <td class="docker-status-up">Up 3 months (healthy)</td>
              <td class="docker-port">80/tcp, 443/tcp</td>
              <td>devlogic-sre-prod</td>
            </tr>
            <tr>
              <td class="docker-id">b4c129e71d</td>
              <td class="docker-image">adnan/eks-microservices:v1.8</td>
              <td>"kubectl run"</td>
              <td class="docker-status-up">Up 1 month (healthy)</td>
              <td class="docker-port">8080-&gt;8080/tcp</td>
              <td>aws-eks-cluster</td>
            </tr>
            <tr>
              <td class="docker-id">c7d341a90f</td>
              <td class="docker-image">adnan/cicd-jenkins-argocd:v3.0</td>
              <td>"jenkins-runner"</td>
              <td class="docker-status-up">Up 2 weeks (healthy)</td>
              <td class="docker-port">9090-&gt;9090/tcp</td>
              <td>cicd-pipeline</td>
            </tr>
            <tr>
              <td class="docker-id">d1e5678b2a</td>
              <td class="docker-image">adnan/ids-cybersec-app:v1.2</td>
              <td>"python app.py"</td>
              <td class="docker-status-up">Up 5 days</td>
              <td class="docker-port">5000-&gt;5000/tcp</td>
              <td>ids-scapy-security</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="output-paragraph" style="margin-top:10px;">💡 All containers deployed on AWS EKS with automated health checks.</div>
    </div>
  `;
}

export function btopHtml() {
  return `
    <div class="output-title">📊 SYSTEM RESOURCE MONITOR (BTOP v1.2.6)</div>
    <div class="timeline-card btop-container">
      <div class="btop-grid">
        <div class="btop-card">
          <div class="btop-card-title"><span>⚡ CPU LOAD</span><span>24%</span></div>
          <div class="btop-meter-row">
            <div class="btop-meter-header"><span>Core 0 (AWS EC2)</span><span>18%</span></div>
            <div class="btop-meter-track"><div class="btop-meter-fill" style="width: 18%;"></div></div>
          </div>
          <div class="btop-meter-row">
            <div class="btop-meter-header"><span>Core 1 (K8s Worker)</span><span>32%</span></div>
            <div class="btop-meter-track"><div class="btop-meter-fill" style="width: 32%;"></div></div>
          </div>
        </div>

        <div class="btop-card">
          <div class="btop-card-title"><span>🧠 MEMORY ALLOCATION</span><span>4.2 / 16.0 GB</span></div>
          <div class="btop-meter-row">
            <div class="btop-meter-header"><span>Kubernetes Pods</span><span>45%</span></div>
            <div class="btop-meter-track"><div class="btop-meter-fill" style="width: 45%;"></div></div>
          </div>
          <div class="btop-meter-row">
            <div class="btop-meter-header"><span>Docker Containers</span><span>28%</span></div>
            <div class="btop-meter-track"><div class="btop-meter-fill" style="width: 28%;"></div></div>
          </div>
        </div>

        <div class="btop-card">
          <div class="btop-card-title"><span>🔥 CORE SKILLS LOAD</span><span>100% ACTIVE</span></div>
          <div class="btop-meter-row">
            <div class="btop-meter-header"><span>AWS &amp; Kubernetes</span><span>92%</span></div>
            <div class="btop-meter-track"><div class="btop-meter-fill" style="width: 92%;"></div></div>
          </div>
          <div class="btop-meter-row">
            <div class="btop-meter-header"><span>Terraform &amp; CI/CD</span><span>88%</span></div>
            <div class="btop-meter-track"><div class="btop-meter-fill" style="width: 88%;"></div></div>
          </div>
        </div>
      </div>
      <div class="output-paragraph" style="margin-top:6px;">🚀 Status: <strong>All Infrastructure Systems Nominal</strong></div>
    </div>
  `;
}

export function notFoundHtml(raw) {
  return `<div class="error-text">Command not found: "${escapeHtml(raw)}". Type <span class="command-text">'help'</span> for available commands.</div>`;
}

export function cdErrorHtml(folder) {
  return `<div class="error-text">cd: no such directory: ${escapeHtml(folder)}</div>`;
}

export function catErrorHtml(file) {
  return `<div class="error-text">cat: ${escapeHtml(file)}: No such file</div>`;
}
