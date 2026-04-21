// Created by Aakash Nair - 8989262

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <section className="resources-cta">
        <h3>Know a great resource we're missing?</h3>
        <p>Help the community grow by suggesting tools and guides.</p>
        <Link to="/contact" className="btn-primary">
          Suggest a Resource
        </Link>
      <div>   
        <p className="footer-copy">&copy; 2026 StudentPortal-ACDT Group-04</p>
      </div>
      </section>
    </footer>
  );
}

export default Footer;