import { useEffect, useState, useRef } from "react";

const bootLines = [
  { text: "ADNAN PATHAN BIOS v2.0.26 — Portfolio Edition", cls: "title" },
  { text: "Copyright (C) 2026 Adnan Pathan. All rights reserved.", cls: "bios" },
  { text: "", cls: "info" },
  { text: "[OK]  Initializing hardware components...", cls: "ok" },
  { text: "[OK]  Loading kernel modules: docker.ko kubernetes.ko terraform.ko", cls: "ok" },
  { text: "[OK]  Mounting AWS cloud storage...", cls: "ok" },
  { text: "[OK]  Starting SSH daemon on port 22", cls: "ok" },
  { text: "[OK]  Bringing up VPC networking (10.0.0.0/16)", cls: "ok" },
  { text: "[OK]  Starting Kubernetes control plane (EKS v1.31)", cls: "ok" },
  { text: "[OK]  Prometheus metrics exporter: active", cls: "ok" },
  { text: "[OK]  Grafana dashboards: online", cls: "ok" },
  { text: "[OK]  ArgoCD GitOps agent: synced", cls: "ok" },
  { text: "[OK]  Jenkins CI/CD pipeline: ready", cls: "ok" },
  { text: "", cls: "info" },
  { text: "> All systems nominal. Launching portfolio...", cls: "ready" },
];

export default function BootScreen({ onDone }) {
  const [lines, setLines] = useState([]);
  const [fadeOut, setFadeOut] = useState(false);

  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    let i = 0;
    const lineDelay = 100;

    const timer = setInterval(() => {
      const line = bootLines[i];

      if (!line) {
        clearInterval(timer);

        setTimeout(() => {
          setFadeOut(true);

          setTimeout(() => {
            onDoneRef.current?.();
          }, 500);
        }, 400);

        return;
      }

      setLines((prev) => [...prev, line]);
      i++;
    }, lineDelay);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`boot-screen ${fadeOut ? "fade-out" : ""}`}>
      <div className="boot-content">
        {lines.map((l, idx) => (
          <div
            key={idx}
            className={`boot-line ${l.cls}`}
          >
            {l.text}
          </div>
        ))}
      </div>

      <div className="boot-cursor">█</div>
    </div>
  );
}