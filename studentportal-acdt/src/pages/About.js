// created by Dhruti Rathod 9018785

import "../css/App.css";

function About() {
  return (
    <main className="page-content">

      {/* HERO SECTION */}
      <section className="about-hero">
        <h1>About StudentPortal-ACDT</h1>
        <p>
          A modern single page application designed to support students with
          resources, productivity tips, and guidance for academic success.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-container">

        <div className="about-card">
          <h3>Project Overview</h3>
          <p>
            StudentPortal-ACDT is a React-based single page application developed
            as part of a Trends in Web Technology course. It focuses on providing
            a simple, organized, and user-friendly experience for students.
          </p>
        </div>

        <div className="about-card">
          <h3>Key Features</h3>
          <ul>
            <li>Single Page Application using React</li>
            <li>Navigation using React Router</li>
            <li>Reusable components</li>
            <li>External CSS for styling</li>
            <li>Responsive and clean design</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Our Goal</h3>
          <p>
            The goal of this project is to create an accessible and visually
            appealing platform where students can easily find helpful academic
            resources and improve their productivity.
          </p>
        </div>

      </section>

    </main>
  );
}

export default About;