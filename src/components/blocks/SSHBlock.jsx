import { useEffect, useRef, useState } from "react";

export default function SSHBlock({ onLine }) {
  const [lines, setLines] = useState([]);
  const doneRef = useRef(false);

  useEffect(() => {
    const sshLines = [
      { text: "$ ssh adnan@devops.cloud -p 22", cls: "command-text" },
      { text: "SSH: Resolving hostname devops.cloud...", cls: "info-text", delay: 300 },
      { text: "SSH: Initiating TCP connection to 34.102.214.87:22", cls: "info-text", delay: 400 },
      { text: "SSH: Performing key exchange (curve25519-sha256)...", cls: "output-text", delay: 700 },
      { text: "SSH: Authenticating with public key \"id_ed25519\"", cls: "output-text", delay: 600 },
      { text: "🔐 Welcome Adnan! Last login: " + new Date().toDateString() + " from 192.168.x.x", cls: "success", delay: 800 },
      { text: "", cls: "info-text", delay: 100 },
      { text: "  ╔══════════════════════════════════════╗", cls: "terminal-green", delay: 100 },
      { text: "  ║   ADNAN PATHAN — DevOps Cloud Server  ║", cls: "success", delay: 80 },
      { text: "  ║   AWS: us-east-1 | EKS: Running       ║", cls: "success", delay: 80 },
      { text: "  ║   Uptime: 99.99% | Load: 0.04         ║", cls: "success", delay: 80 },
      { text: "  ╚══════════════════════════════════════╝", cls: "terminal-green", delay: 80 },
      { text: "", cls: "info-text", delay: 100 },
      { text: "$ Connection closed. Type 'contact' to actually reach me! 😄", cls: "warning-text", delay: 600 },
    ];

    let delay = 0;
    const timers = sshLines.map((line) => {
      delay += line.delay || 300;
      return setTimeout(() => {
        setLines((prev) => [...prev, line]);
        onLine && onLine();
      }, delay);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="timeline-card">
      {lines.map((line, i) => (
        <div key={i} className={`ssh-line ${line.cls}`}>{line.text}</div>
      ))}
    </div>
  );
}
