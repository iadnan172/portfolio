// Ported as-is from the original vanilla-JS portfolio (content/values unchanged).
export const portfolioData = {
  about: {
    name: "ADNAN PATHAN",
    title: "DevOps Engineer | Cloud Engineer | Site Reliability Engineer",
    bio: `AWS-certified DevOps Engineer with 1.5+ years of experience in cloud infrastructure management, Kubernetes orchestration, and Linux automation. Proven track record of deploying containerized workloads on AWS EKS, managing VPC networking, and building CI/CD pipelines with Jenkins and ArgoCD. Hands-on experience with Terraform for IaC and Prometheus/Grafana for observability.`,
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Jenkins", "Ansible", "Python", "Linux", "Git", "CI/CD", "Security", "Monitoring", "Bash", "Grafana", "Prometheus", "ArgoCD"],
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
  skillBars: [
    { name: "Docker", pct: 92 },
    { name: "Kubernetes", pct: 88 },
    { name: "AWS", pct: 90 },
    { name: "Terraform", pct: 82 },
    { name: "Jenkins", pct: 85 },
    { name: "Ansible", pct: 75 },
    { name: "Python", pct: 70 },
    { name: "Linux / Bash", pct: 93 },
    { name: "ArgoCD", pct: 80 },
    { name: "Prometheus", pct: 78 },
    { name: "Grafana", pct: 78 },
    { name: "Git / CI/CD", pct: 90 },
  ]
};

export const RESUME_URL = "/DEVOPS_ADNAN_PATHAN_RESUME.pdf";

export const ALL_COMMANDS = [
  'whois adnan', 'about', 'ls', 'skills', 'stats', 'resume', 'cv', 'download-resume',
  'send-message', 'email', 'mail', 'message', 'ssh adnan', 'ssh', 'ping adnan', 'ping',
  'neofetch', 'clear', 'cls', 'help',
  'git log --graph', 'git log', 'docker ps', 'docker', 'btop', 'htop', 'k8s', 'kubectl',
  'cd education', 'cd experience', 'cd projects', 'cd contact', 'cd skills',
  'cat skills.txt', 'cat education.txt', 'cat experience.txt', 'cat projects.txt', 'cat contact.txt'
];
