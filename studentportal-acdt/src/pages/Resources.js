// Created by Aakash Nair - 8989262

import { useState } from "react";

const resourcesData = [
  {
    category: "Frontend Frameworks",
    icon: "🖥️",
    color: "cat-blue",
    items: [
      {
        title: "React Official Docs",
        description:
          "The go-to reference for building modern UIs with React hooks, components, and the latest concurrent features.",
        link: "https://react.dev",
        tag: "Documentation",
        trending: true,
      },
      {
        title: "Next.js",
        description:
          "Full-stack React framework with App Router, server components, and built-in performance optimizations.",
        link: "https://nextjs.org/docs",
        tag: "Framework",
        trending: true,
      },
      {
        title: "Vue.js",
        description:
          "Progressive JavaScript framework known for its gentle learning curve and flexible component system.",
        link: "https://vuejs.org",
        tag: "Framework",
        trending: false,
      },
      {
        title: "Svelte",
        description:
          "A compiler-based framework that ships zero runtime overhead — write less code, run faster apps.",
        link: "https://svelte.dev",
        tag: "Framework",
        trending: true,
      },
    ],
  },
  {
    category: "Styling & Design Systems",
    icon: "🎨",
    color: "cat-teal",
    items: [
      {
        title: "Tailwind CSS",
        description:
          "Utility-first CSS framework enabling rapid UI development with a consistent design language.",
        link: "https://tailwindcss.com",
        tag: "CSS Framework",
        trending: true,
      },
      {
        title: "CSS Tricks",
        description:
          "Articles, guides, and almanac covering everything from flexbox to custom properties and animations.",
        link: "https://css-tricks.com",
        tag: "Learning",
        trending: false,
      },
      {
        title: "Figma",
        description:
          "Industry-standard collaborative design tool used by teams worldwide for UI/UX prototyping.",
        link: "https://figma.com",
        tag: "Design Tool",
        trending: false,
      },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    color: "cat-indigo",
    items: [
      {
        title: "Node.js Docs",
        description:
          "Official documentation for server-side JavaScript — events, streams, modules, and the runtime environment.",
        link: "https://nodejs.org/en/docs",
        tag: "Runtime",
        trending: false,
      },
      {
        title: "tRPC",
        description:
          "End-to-end typesafe APIs for TypeScript — no schemas, no code generation, just type inference.",
        link: "https://trpc.io",
        tag: "API Layer",
        trending: true,
      },
      {
        title: "Hono",
        description:
          "Ultra-fast, lightweight web framework for the edge — works on Cloudflare Workers, Deno, Bun, and Node.",
        link: "https://hono.dev",
        tag: "Framework",
        trending: true,
      },
      {
        title: "Prisma",
        description:
          "Next-generation ORM for Node.js and TypeScript with auto-generated type-safe queries.",
        link: "https://www.prisma.io",
        tag: "ORM",
        trending: true,
      },
    ],
  },
  {
    category: "AI & Emerging Tech",
    icon: "🤖",
    color: "cat-violet",
    items: [
      {
        title: "Vercel AI SDK",
        description:
          "Open-source toolkit for building AI-powered streaming UIs in React, Next.js, and Svelte.",
        link: "https://sdk.vercel.ai",
        tag: "AI",
        trending: true,
      },
      {
        title: "LangChain JS",
        description:
          "Framework for developing context-aware reasoning applications powered by language models.",
        link: "https://js.langchain.com",
        tag: "AI",
        trending: true,
      },
      {
        title: "WebAssembly",
        description:
          "Binary instruction format enabling near-native performance on the web — powering the next era of apps.",
        link: "https://webassembly.org",
        tag: "Web Platform",
        trending: false,
      },
    ],
  },
  {
    category: "DevOps & Deployment",
    icon: "🚀",
    color: "cat-orange",
    items: [
      {
        title: "Vercel",
        description:
          "Zero-config deployment platform with edge functions, preview deployments, and analytics built-in.",
        link: "https://vercel.com/docs",
        tag: "Deployment",
        trending: true,
      },
      {
        title: "Docker Docs",
        description:
          "Containerization fundamentals — images, containers, Compose, and best practices for web apps.",
        link: "https://docs.docker.com",
        tag: "DevOps",
        trending: false,
      },
      {
        title: "GitHub Actions",
        description:
          "Automate CI/CD workflows directly from your repository with event-driven pipelines.",
        link: "https://docs.github.com/en/actions",
        tag: "CI/CD",
        trending: false,
      },
    ],
  },
  {
    category: "Learning Platforms",
    icon: "📚",
    color: "cat-green",
    items: [
      {
        title: "MDN Web Docs",
        description:
          "The definitive reference for HTML, CSS, and JavaScript — maintained by Mozilla and the community.",
        link: "https://developer.mozilla.org",
        tag: "Reference",
        trending: false,
      },
      {
        title: "The Odin Project",
        description:
          "Free full-stack curriculum taking you from zero to job-ready with projects and a supportive community.",
        link: "https://www.theodinproject.com",
        tag: "Curriculum",
        trending: true,
      },
      {
        title: "roadmap.sh",
        description:
          "Community-curated learning roadmaps for frontend, backend, DevOps, and more with resource links.",
        link: "https://roadmap.sh",
        tag: "Roadmap",
        trending: true,
      },
      {
        title: "web.dev",
        description:
          "Google's hub for modern web development guidance — performance, accessibility, and best practices.",
        link: "https://web.dev",
        tag: "Reference",
        trending: false,
      },
    ],
  },
];

function ResourceCard({ item }) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
    >
      {item.trending && <span className="trending-badge">🔥 Trending</span>}
      <div className="card-header">
        <span className="card-tag">{item.tag}</span>
      </div>
      <h4 className="card-title">{item.title}</h4>
      <p className="card-desc">{item.description}</p>
      <span className="card-link-label">Visit resource →</span>
    </a>
  );
}

function Resources() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const categories = ["All", ...resourcesData.map((r) => r.category)];

  const filtered = resourcesData.filter((section) => {
    const matchCategory =
      activeFilter === "All" || section.category === activeFilter;
    if (!matchCategory) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      section.category.toLowerCase().includes(q) ||
      section.items.some(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.tag.toLowerCase().includes(q)
      )
    );
  });

  const totalResources = resourcesData.reduce(
    (acc, s) => acc + s.items.length,
    0
  );
  const trendingCount = resourcesData.reduce(
    (acc, s) => acc + s.items.filter((i) => i.trending).length,
    0
  );

  return (
    <main className="resources-page">
      {/* Hero Banner */}
      <section className="resources-hero">
        <div className="resources-hero-content">
          <div className="hero-eyebrow">Web Technology Trends</div>
          <h1 className="resources-title">
            Curated Resources
            <span className="title-accent"> for Modern Devs</span>
          </h1>
          <p className="resources-subtitle">
            Stay ahead of the curve with hand-picked tools, frameworks, and
            learning materials shaping the web in 2025.
          </p>

          <div className="resources-stats">
            <div className="stat-pill">
              <strong>{totalResources}</strong> Resources
            </div>
            <div className="stat-pill">
              <strong>{resourcesData.length}</strong> Categories
            </div>
            <div className="stat-pill trending-stat">
              <strong>{trendingCount}</strong> 🔥 Trending
            </div>
          </div>
        </div>
      </section>

      {/* Search + Filter Bar */}
      <section className="resources-controls">
        <div className="controls-inner">
          <div className="search-wrap">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search resources, tags, topics…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="clear-btn" onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>

          <div className="filter-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Sections */}
      <section className="resources-grid-section">
        <div className="resources-container">
          {filtered.length === 0 ? (
            <div className="no-results">
              <span className="no-results-icon">🔭</span>
              <h3>No resources found</h3>
              <p>Try adjusting your search or filter.</p>
              <button
                className="btn-primary"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filtered.map((section) => (
              <div key={section.category} className="resource-section">
                <div className={`section-header ${section.color}`}>
                  <span className="section-icon">{section.icon}</span>
                  <h2 className="section-title">{section.category}</h2>
                  <span className="section-count">
                    {section.items.length} resources
                  </span>
                </div>
                <div className="cards-grid">
                  {section.items
                    .filter((item) => {
                      if (!search.trim()) return true;
                      const q = search.toLowerCase();
                      return (
                        item.title.toLowerCase().includes(q) ||
                        item.description.toLowerCase().includes(q) ||
                        item.tag.toLowerCase().includes(q)
                      );
                    })
                    .map((item) => (
                      <ResourceCard key={item.title} item={item} />
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

    </main>
  );
}

export default Resources;