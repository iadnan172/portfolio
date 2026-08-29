import { useEffect, useRef } from "react";
import { portfolioData } from "../../data/portfolioData";

export default function SkillsBlock() {
  const ref = useRef(null);

  useEffect(() => {
    const bars = ref.current.querySelectorAll(".skill-bar-fill");
    const t = setTimeout(() => {
      bars.forEach((bar) => {
        bar.style.width = bar.dataset.pct + "%";
      });
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div ref={ref}>
      <div className="output-title">⚡ TECHNICAL SKILLS MATRIX</div>
      <div className="timeline-card">
        <div className="skill-bars-container">
          {portfolioData.skillBars.map((s) => (
            <div className="skill-bar-row" key={s.name}>
              <span className="skill-bar-label">{s.name}</span>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" data-pct={s.pct} style={{ width: 0 }} />
              </div>
              <span className="skill-bar-pct">{s.pct}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="timeline-card">
        <div className="output-subtitle">Cloud &amp; Infrastructure:</div>
        <div className="skill-tags">
          <span className="skill-tag">AWS (EC2, EKS, VPC, S3, IAM, ALB, ECR)</span>
          <span className="skill-tag">Docker</span>
          <span className="skill-tag">Kubernetes</span>
          <span className="skill-tag">Terraform</span>
          <span className="skill-tag">Ansible</span>
        </div>
        <div className="output-subtitle" style={{ marginTop: 10 }}>CI/CD &amp; Observability:</div>
        <div className="skill-tags">
          <span className="skill-tag">Jenkins</span>
          <span className="skill-tag">ArgoCD</span>
          <span className="skill-tag">Prometheus</span>
          <span className="skill-tag">Grafana</span>
          <span className="skill-tag">SonarQube</span>
          <span className="skill-tag">Trivy</span>
        </div>
      </div>
    </div>
  );
}
