// Created by Teena Maria Thomas- 9043201

import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to StudentPortal-ACDT</h1>

        <p>
          A modern single page application designed to support students with
          useful resources, productivity tips, and academic guidance.
        </p>

        <div className="hero-buttons">
          <Link to="/resources" className="btn-primary">Explore Resources</Link>
          <Link to="/tips" className="btn-secondary">View Tips</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;