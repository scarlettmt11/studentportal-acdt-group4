import "../css/App.css";

const tips = [
  {
    icon: "📋",
    title: "Overall Course Tips",
    items: [
      "Check all assignment due dates",
      "Before submission check rubric requirements",
      "Ask questions to the professor in class",
      "Plan your work and follow your schedule",
    ],
  },
  {
    icon: "💡",
    title: "Skill Tips",
    items: [
      "Build strong skills based on your course",
      "Apply learning outcomes in real-time projects",
      "Create a plan and work accordingly",
      "Update your resume and portfolio",
    ],
  },
  {
    icon: "🏥",
    title: "Medical Care",
    items: [
      "Contact the college medical office",
      "Check for free medicare options",
      "Check available appointment dates",
      "Request appointment date changes if needed",
    ],
  },
  {
    icon: "🎓",
    title: "Student Support Centre",
    items: [
      "Book an appointment with an advisor",
      "Clarify doubts related to your course",
      "Attend student meetings and workshops",
    ],
  },
  {
    icon: "🤝",
    title: "Networking",
    items: [
      "Attend college job fair events",
      "Join student groups and clubs",
      "Consider becoming a peer mentor",
    ],
  },
];

function Tips() {
  return (
    <div className="tips-page">
      <div className="tips-header">
        <h1>Student Tips</h1>
        <p>Practical advice to help you succeed academically and beyond.</p>
      </div>

      <div className="tips-grid">
        {tips.map((tip) => (
          <div className="tips-card" key={tip.title}>
            <span className="tips-card-icon">{tip.icon}</span>
            <h3>{tip.title}</h3>
            <ul>
              {tip.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tips;