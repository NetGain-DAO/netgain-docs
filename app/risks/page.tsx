import DocsLayout from "@/components/DocsLayout";

export default function RisksPage() {
  return (
    <DocsLayout current="Risks">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }
        .title { margin-top:20px; font-size:46px; line-height:1.1; font-weight:900; color:#fff; }
        .title span { color:#facc15; }
        .lead { margin-top:24px; color:#fff; font-size:18px; line-height:1.9; max-width:850px; }

        .section { margin-top:50px; max-width:900px; }
        .section h2 { color:#facc15; margin-bottom:18px; font-size:28px; }
        .section p,
        .section li { color:#fff; line-height:1.9; }

        .cards {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:16px;
          margin-top:24px;
        }

        .card {
          border:1px solid rgba(250,204,21,.20);
          border-radius:22px;
          padding:24px;
          background:rgba(250,204,21,.04);
        }

        .card h3 {
          color:#facc15;
          margin-top:0;
        }

        .highlight {
          margin-top:50px;
          border:1px solid rgba(250,204,21,.20);
          border-radius:24px;
          padding:30px;
          background:rgba(250,204,21,.04);
        }

        .highlight h2 {
          margin-top:0;
          color:#facc15;
        }

        .nav {
          margin-top:50px;
          display:flex;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
        }

        .btn-prev,
        .btn-next {
          text-decoration:none;
          padding:14px 18px;
          border-radius:14px;
          font-weight:900;
        }

        .btn-prev {
          color:#facc15;
          border:1px solid rgba(250,204,21,.25);
        }

        .btn-next {
          background:#facc15;
          color:#000;
        }
      `}</style>

      <div className="eyebrow">Risks</div>

      <h1 className="title">
        Understanding <br />
        <span>Potential Risks</span>
      </h1>

      <p className="lead">
        Participation in NetGain DAO involves risk. All blockchain ecosystems,
        digital assets, staking systems and treasury strategies involve
        uncertainty and should be approached responsibly.
      </p>

      <div className="cards">

        <div className="card">
          <h3>Market Risk</h3>
          <p>
            Digital asset prices may increase or decrease significantly due to
            market conditions.
          </p>
        </div>

        <div className="card">
          <h3>Volatility Risk</h3>
          <p>
            Cryptocurrency markets can experience rapid price fluctuations and
            periods of high volatility.
          </p>
        </div>

        <div className="card">
          <h3>Smart Contract Risk</h3>
          <p>
            Although contracts are publicly verifiable, no smart contract can
            be considered completely risk free.
          </p>
        </div>

        <div className="card">
          <h3>Treasury Risk</h3>
          <p>
            Treasury performance depends on market conditions, governance
            decisions and treasury strategy outcomes.
          </p>
        </div>

      </div>

      <div className="section">
        <h2>Governance Risk</h2>

        <p>
          Governance decisions are made through community participation.
          Future decisions may affect treasury allocations, ecosystem
          priorities and operational parameters.
        </p>
      </div>

      <div className="section">
        <h2>Technology Risk</h2>

        <p>
          Blockchain networks, wallets, third-party services and smart
          contract infrastructure may experience interruptions, upgrades,
          vulnerabilities or unexpected events.
        </p>
      </div>

      <div className="section">
        <h2>Regulatory Risk</h2>

        <p>
          Laws and regulations regarding digital assets and blockchain
          technologies may change over time and vary by jurisdiction.
        </p>
      </div>

      <div className="highlight">
        <h2>No Guarantee Of Profit</h2>

        <p>
          Participation in NetGain DAO does not guarantee profits,
          investment returns, treasury distributions or future asset
          appreciation.
        </p>

        <p>
          All participants should perform their own research and make
          independent decisions based on their personal circumstances and
          risk tolerance.
        </p>
      </div>

      <div className="section">
        <h2>Personal Responsibility</h2>

        <p>
          Each participant is responsible for securing their wallet,
          protecting private keys, verifying transactions and understanding
          the risks associated with blockchain participation.
        </p>
      </div>

      <div className="section">
        <h2>Long-Term Perspective</h2>

        <p>
          NetGain DAO is designed around long-term ecosystem growth and
          community participation. Short-term market movements may not
          reflect long-term ecosystem development.
        </p>
      </div>

      <div className="nav">
        <a href="/transparency-security" className="btn-prev">
          ← Transparency & Security
        </a>

        <a href="/community-first" className="btn-next">
          Next: Community First →
        </a>
      </div>
    </DocsLayout>
  );
}