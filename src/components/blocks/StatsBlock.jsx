import { useEffect, useState } from "react";
import { portfolioData } from "../../data/portfolioData";

export default function StatsBlock() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch("https://api.github.com/users/iadnan172"),
          fetch("https://api.github.com/users/iadnan172/repos?per_page=100"),
        ]);
        if (!userRes.ok) throw new Error("API rate limit or network error");
        const user = await userRes.json();
        const repos = await reposRes.json();
        const totalStars = Array.isArray(repos) ? repos.reduce((sum, r) => sum + r.stargazers_count, 0) : 0;
        const totalForks = Array.isArray(repos) ? repos.reduce((sum, r) => sum + r.forks_count, 0) : 0;
        const langs = Array.isArray(repos) ? [...new Set(repos.map((r) => r.language).filter(Boolean))].slice(0, 6) : [];
        if (!cancelled) setState({ status: "ok", user, totalStars, totalForks, langs });
      } catch (e) {
        if (!cancelled) setState({ status: "error" });
      }
    })();
    return () => { cancelled = true; };
  }, []);

  if (state.status === "loading") {
    return <div className="info-text">📡 Fetching GitHub stats from api.github.com...</div>;
  }

  if (state.status === "error") {
    return (
      <div>
        <div className="timeline-card">
          <div className="error-text">❌ Failed to fetch GitHub stats. (Rate limit or network issue)</div>
          <div className="output-paragraph">
            🔗 Visit directly: <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="command-text">{portfolioData.contact.github}</a>
          </div>
        </div>
      </div>
    );
  }

  const { user, totalStars, totalForks, langs } = state;

  return (
    <div>
      <div className="output-title">📊 GITHUB STATS — @iadnan172</div>
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">{user.public_repos}</span>
          <div className="stat-label">📦 Public Repos</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">{user.followers}</span>
          <div className="stat-label">👥 Followers</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">{user.following}</span>
          <div className="stat-label">➡️ Following</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalStars}</span>
          <div className="stat-label">⭐ Total Stars</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">{totalForks}</span>
          <div className="stat-label">🍴 Total Forks</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">{user.public_gists || 0}</span>
          <div className="stat-label">📝 Gists</div>
        </div>
      </div>
      <div className="timeline-card" style={{ marginTop: 4 }}>
        <div className="output-subtitle">🗓️ Member Since: <span className="output-text">{new Date(user.created_at).getFullYear()}</span></div>
        {langs.length > 0 && (
          <>
            <div className="output-subtitle" style={{ marginTop: 8 }}>💻 Languages Used:</div>
            <div className="skill-tags">{langs.map((l) => <span className="skill-tag" key={l}>{l}</span>)}</div>
          </>
        )}
        <div className="output-paragraph" style={{ marginTop: 8 }}>
          🔗 Profile: <a href={portfolioData.contact.github} target="_blank" rel="noreferrer" className="command-text">{portfolioData.contact.github}</a>
        </div>
      </div>
    </div>
  );
}
