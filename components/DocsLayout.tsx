"use client";

import { useState, type ReactNode } from "react";

const sections = [
  { title: "About NetGain DAO", href: "/what-is-netgain" },
  { title: "Problems & Solutions", href: "/problems-solutions" },
  { title: "NetGain Smart Contracts", href: "/smart-contracts" },
  { title: "NG Token", href: "/ng-token" },
  { title: "Membership NFTs", href: "/membership" },
  { title: "Staking", href: "/staking" },
  { title: "Community-Owned Multi-Asset Treasury", href: "/treasury" },
  { title: "Treasury Participation", href: "/treasury-participation" },
  { title: "Marketing Rewards", href: "/marketing-rewards" },
  { title: "Governance", href: "/governance" },
  { title: "Platform Parameters", href: "/platform-parameters" },
  { title: "Recycling System", href: "/recycling-system" },
  { title: "Transparency & Security", href: "/transparency-security" },
  { title: "Risks", href: "/risks" },
  { title: "community first", href: "/community-first" },
  { title: "Building Wealth Together", href: "/building-wealth-together" },
];

export default function DocsLayout({
  children,
  current,
}: {
  children: ReactNode;
  current?: string;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [search, setSearch] = useState("");

  const filteredSections = sections.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="docs-page">
      <style>{`
        * { box-sizing: border-box; }
        html, body { margin: 0; background: #050505; color: #fff; font-family: Arial, sans-serif; }

        .docs-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 20% 0%, rgba(250,204,21,.10), transparent 30%),
            #050505;
        }

        .topbar {
          height: 78px;
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          background: rgba(0,0,0,.94);
          border-bottom: 1px solid rgba(250,204,21,.18);
          backdrop-filter: blur(18px);
        }

        .left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .menu-btn {
          display: inline-flex !important;
          align-items: center;
          justify-content: center;
          min-width: 78px;
          height: 42px;
          border: 1px solid rgba(250,204,21,.45);
          background: #facc15;
          color: #000;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 900;
          cursor: pointer;
          z-index: 200;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 13px;
          text-decoration: none;
        }

        .logo-wrap {
          width: 50px;
          height: 50px;
          border-radius: 14px;
          border: 1px solid rgba(250,204,21,.25);
          background: rgba(250,204,21,.08);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .logo {
          width: 46px;
          height: 46px;
          object-fit: contain;
        }

        .brand h1 {
          margin: 0;
          color: #facc15;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 1px;
          white-space: nowrap;
        }

        .brand p {
          margin: 4px 0 0;
          color: #d4d4d8;
          font-size: 12px;
          white-space: nowrap;
        }

        .actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn {
          text-decoration: none;
          padding: 10px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 900;
        }

        .btn-outline {
          color: #facc15;
          border: 1px solid rgba(250,204,21,.35);
        }

        .btn-gold {
          background: #facc15;
          color: #000;
        }

        .layout {
          display: flex;
          max-width: 1440px;
          margin: 0 auto;
        }

        .sidebar {
          width: 320px;
          min-height: calc(100vh - 78px);
          position: sticky;
          top: 78px;
          padding: 24px 18px;
          background: rgba(0,0,0,.70);
          border-right: 1px solid rgba(250,204,21,.14);
          transition: all .2s ease;
        }

        .sidebar.closed {
          width: 0;
          padding: 0;
          overflow: hidden;
          border-right: 0;
        }

        .sidebar-title {
          color: #facc15;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2.5px;
          margin-bottom: 14px;
        }

        .search {
          width: 100%;
          margin-bottom: 18px;
          border-radius: 14px;
          border: 1px solid rgba(250,204,21,.25);
          background: rgba(255,255,255,.04);
          padding: 13px 14px;
          color: #fff;
          font-size: 13px;
          outline: none;
        }

        .search::placeholder {
          color: #8a8a8a;
        }

        .side-link {
          display: block;
          text-decoration: none;
          padding: 11px 13px;
          border-radius: 12px;
          color: #fff;
          font-size: 14px;
          margin-bottom: 5px;
          border: 1px solid transparent;
        }

        .side-link:hover,
        .side-link.active {
          color: #facc15;
          background: rgba(250,204,21,.08);
          border-color: rgba(250,204,21,.25);
        }

        .empty {
          color: #aaa;
          font-size: 13px;
          padding: 12px;
        }

        .content {
          flex: 1;
          min-width: 0;
          padding: 54px 50px 120px;
        }

        .overlay {
          display: none;
        }

        @media (max-width: 980px) {
          .topbar {
            height: 72px;
            padding: 0 12px;
          }

          .brand h1 {
            font-size: 15px;
          }

          .brand p {
            display: none;
          }

          .logo-wrap {
            width: 42px;
            height: 42px;
            border-radius: 12px;
          }

          .logo {
            width: 38px;
            height: 38px;
          }

          .actions .btn {
            display: none;
          }

          .layout {
            display: block;
          }

          .content {
            padding: 34px 18px 80px;
          }

          .sidebar {
            position: fixed;
            left: 0;
            top: 72px;
            bottom: 0;
            width: min(88vw, 360px);
            min-height: auto;
            z-index: 120;
            padding: 22px 18px;
            overflow-y: auto;
            background: #050505;
            border-right: 1px solid rgba(250,204,21,.20);
            box-shadow: 30px 0 80px rgba(0,0,0,.70);
          }

          .sidebar.closed {
            transform: translateX(-110%);
            width: min(88vw, 360px);
            padding: 22px 18px;
            border-right: 1px solid rgba(250,204,21,.20);
          }

          .overlay {
            display: block;
            position: fixed;
            inset: 72px 0 0 0;
            background: rgba(0,0,0,.65);
            z-index: 110;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="left">
          <button
            type="button"
            className="menu-btn"
            onClick={() => setSidebarOpen((v) => !v)}
          >
            {sidebarOpen ? "HIDE" : "MENU"}
          </button>

          <a href="/" className="brand">
            <div className="logo-wrap">
              <img src="/logo.png" alt="NetGain DAO" className="logo" />
            </div>

            <div>
              <h1>NETGAIN DAO DOCS</h1>
              <p>Community-Owned Multi-Asset Treasury</p>
            </div>
          </a>
        </div>

        <div className="actions">
          <a href="https://netgaindao.io" className="btn btn-outline">
            Website
          </a>
          <a href="https://app.netgaindao.io" className="btn btn-gold">
            Launch App
          </a>
        </div>
      </header>

      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}

      <div className="layout">
        <aside className={`sidebar ${sidebarOpen ? "" : "closed"}`}>
          <div className="sidebar-title">DOCUMENTATION</div>

          <input
            className="search"
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filteredSections.length > 0 ? (
            filteredSections.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`side-link ${current === item.title ? "active" : ""}`}
                onClick={() => {
                  if (window.innerWidth <= 980) setSidebarOpen(false);
                }}
              >
                {item.title}
              </a>
            ))
          ) : (
            <div className="empty">No results found.</div>
          )}
        </aside>

        <section className="content">{children}</section>
      </div>
    </main>
  );
}