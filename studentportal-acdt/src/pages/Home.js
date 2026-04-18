// Created by Teena Maria Thomas - 9043201

import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to StudentPortal-ACDT</h1>
        <p>
          A modern single page application built to support student learning,
          growth, and access to useful academic resources.
        </p>
        <div className="hero-buttons">
          <Link to="/resources" className="btn-primary">Explore Resources</Link>
          <Link to="/tips" className="btn-secondary">Student Tips</Link>
        </div>
      </section>

      <section className="highlights">
        <h2>What You Can Find Here</h2>
        <div className="card-container">
          <div className="card">
            <h3>Academic Support</h3>
            <p>Helpful resources and study guidance for students.</p>
          </div>
          <div className="card">
            <h3>Success Tips</h3>
            <p>Simple strategies to stay organized and productive.</p>
          </div>
          <div className="card">
            <h3>Easy Navigation</h3>
            <p>A clean SPA experience using React Router.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;