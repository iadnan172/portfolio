export default function SendMessageBlock({ state }) {
  const { step, entered, sending, result } = state;
  const stepLabels = ["name", "email", "message"];

  return (
    <div>
      <div className="output-title">📧 SEND MESSAGE — Terminal Form</div>
      <div className="timeline-card">
        <div className="form-status-line">Connecting to mail server... <span className="success">✅ Connected</span></div>

        {entered.map((e, i) => (
          <div className="form-status-line" key={i}>
            <span className="success">✔</span> {e.label}: <span className="highlight">{e.value}</span>
          </div>
        ))}

        {step < 3 && (
          <div className="form-status-line">
            <span className="command-text">Step {step + 1}/3</span> — Enter your <span className="highlight">{stepLabels[step]}</span>:
          </div>
        )}

        {step === 3 && entered.length === 3 && (
          <div className="form-status-line"><span className="success">✔</span> Message recorded.</div>
        )}

        {sending && (
          <div className="form-status-line"><span className="loading" /> Sending message...</div>
        )}

        {result === "success" && (
          <div className="success" style={{ marginTop: 8 }}>✅ Message sent successfully! I'll get back to you soon. 🚀</div>
        )}

        {result === "mailto" && (
          <div className="success" style={{ marginTop: 8 }}>
            ✅ Opening mail client!
            <div className="output-paragraph" style={{ marginTop: 6 }}>
              If your mail app didn't open, use the <span className="command-text">'ping adnan'</span> command to compose directly.
            </div>
          </div>
        )}
      </div>
      {step < 3 && (
        <div className="output-paragraph" style={{ marginTop: 4, fontSize: "0.85em", opacity: 0.85 }}>
          💡 Tip: Press <span className="command-text">Esc</span> to cancel at any time.
        </div>
      )}
    </div>
  );
}
