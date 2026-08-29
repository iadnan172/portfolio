import { useEffect, useRef, useState } from "react";
import { RESUME_URL } from "../../data/portfolioData";

export default function ResumeBlock() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);
  const triggered = useRef(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 25 + 15;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setDone(true);

        if (!triggered.current) {
          triggered.current = true;
          const link = document.createElement("a");
          link.href = RESUME_URL;
          link.download = "DEVOPS_ADNAN_PATHAN_RESUME.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
      setPct(current);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="output-title">📄 RESUME DOWNLOAD</div>
      <div className="timeline-card">
        <div className="output-text">📄 Preparing resume download...</div>
        <div className="resume-progress">
          <div className="resume-progress-bar-track">
            <div className="resume-progress-bar-fill" style={{ width: pct + "%" }} />
          </div>
          <div className="output-text">{Math.floor(pct)}%</div>
        </div>
        {done && (
          <>
            <div className="success">✅ Download started: DEVOPS_ADNAN_PATHAN_RESUME.pdf</div>
            <div style={{ marginTop: 8 }}>
              <a href={RESUME_URL} download="DEVOPS_ADNAN_PATHAN_RESUME.pdf" className="resume-download-btn">
                📥 Download Resume (PDF)
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
