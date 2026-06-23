import DocsLayout from "@/components/DocsLayout";

export default function RecyclingSystemPage() {
  return (
    <DocsLayout current="Recycling System">
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

        .value {
          font-size:42px;
          font-weight:900;
          color:#facc15;
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

        .contract {
          margin-top:50px;
          border:1px solid rgba(250,204,21,.20);
          border-radius:24px;
          padding:28px;
          background:rgba(250,204,21,.04);
        }

        .contract h2 {
          margin-top:0;
          color:#facc15;
        }

        .contract-title {
          color:#fff;
          font-weight:700;
          margin-bottom:10px;
        }

        .contract-address {
          color:#9ca3af;
          font-size:14px;
          word-break:break-all;
          margin-bottom:18px;
        }

        .contract-link {
          display:inline-block;
          text-decoration:none;
          color:#000;
          background:#facc15;
          padding:12px 18px;
          border-radius:12px;
          font-weight:900;
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

      <div className="eyebrow">Recycling System</div>

      <h1 className="title">
        Token <br />
        <span>Recycling Mechanism</span>
      </h1>

      <p className="lead">
        The NetGain Recycling System is designed to support long-term
        sustainability by collecting tokens from ecosystem activity and
        redistributing them through predefined smart contract rules.
      </p>

      <div className="cards">
        <div className="card">
          <div className="value">80%</div>
          <h3>Reward Pool</h3>
          <p>
            Recycled tokens returned to the Staking Reward Pool.
          </p>
        </div>

        <div className="card">
          <div className="value">10%</div>
          <h3>Burn</h3>
          <p>
            Permanently removed from circulation.
          </p>
        </div>

        <div className="card">
          <div className="value">5%</div>
          <h3>NG Vault</h3>
          <p>
            Supports treasury growth and ecosystem development.
          </p>
        </div>

        <div className="card">
          <div className="value">5%</div>
          <h3>Operations</h3>
          <p>
            Supports ongoing ecosystem operations.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>How Recycling Works</h2>

        <p>
          The Recycling Contract receives tokens generated through ecosystem
          activity and redistributes them according to predefined rules.
        </p>

        <p>
          The purpose of the system is to improve long-term sustainability,
          support reward generation and reduce circulating supply through
          periodic token burning.
        </p>
      </div>

      <div className="section">
        <h2>Recycling Sources</h2>

        <p>
          Tokens may enter the Recycling Contract through:
        </p>

        <ul>
          <li>Claim Reward Activity</li>
          <li>Unstake Activity</li>
          <li>Treasury Swap Activity</li>
          <li>Future Governance-Approved Sources</li>
        </ul>

        <p>
          These recycled tokens are automatically processed by the Recycling
          Contract.
        </p>
      </div>

      <div className="highlight">
        <h2>Automatic Distribution</h2>

        <p>
          Once tokens enter the Recycling Contract, distribution occurs
          automatically according to the predefined allocation model.
        </p>

        <ul>
          <li>80% → Staking Reward Pool</li>
          <li>10% → Burn Address</li>
          <li>5% → NG Vault</li>
          <li>5% → Operations Wallet</li>
        </ul>
      </div>

      <div className="section">
        <h2>Reward Pool Sustainability</h2>

        <p>
          Returning 80% of recycled tokens to the Staking Reward Pool helps
          maintain long-term reward generation and supports ecosystem
          sustainability.
        </p>

        <p>
          This mechanism continuously recycles ecosystem activity back into
          the reward infrastructure.
        </p>
      </div>

      <div className="section">
        <h2>Token Burning</h2>

        <p>
          10% of all recycled tokens are permanently burned.
        </p>

        <p>
          Burned tokens are removed from circulation and may contribute to
          reducing the available token supply over time.
        </p>
      </div>

      <div className="section">
        <h2>Why Recycling Matters</h2>

        <ul>
          <li>Supports Staking Sustainability</li>
          <li>Refills the Reward Pool</li>
          <li>Reduces Circulating Supply</li>
          <li>Supports NG Vault Growth</li>
          <li>Creates Long-Term Economic Balance</li>
        </ul>
      </div>

      <div className="contract">
        <h2>Smart Contract Reference</h2>

        <div className="contract-title">
          Recycling Contract
        </div>

        <div className="contract-address">
          0x0b6c143Bb463D941b6Ea9847243aECE6E0787e88
        </div>

        <a
          href="https://bscscan.com/address/0x0b6c143Bb463D941b6Ea9847243aECE6E0787e88"
          target="_blank"
          rel="noopener noreferrer"
          className="contract-link"
        >
          View Contract on BscScan →
        </a>
      </div>

      <div className="nav">
        <a href="/platform-parameters" className="btn-prev">
          ← Platform Parameters
        </a>

        <a href="/transparency-security" className="btn-next">
          Next: Transparency & Security →
        </a>
      </div>
    </DocsLayout>
  );
}