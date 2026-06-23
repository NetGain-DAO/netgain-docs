import DocsLayout from "@/components/DocsLayout";

export default function MarketingRewardsPage() {
  return (
    <DocsLayout current="Marketing Rewards">
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

        table {
          width:100%;
          border-collapse:collapse;
          margin-top:20px;
        }

        th {
          background:rgba(250,204,21,.08);
          color:#facc15;
        }

        th,
        td {
          border:1px solid rgba(250,204,21,.15);
          padding:14px;
          text-align:left;
        }

        td {
          color:white;
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

        .contracts {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:16px;
          margin-top:24px;
        }

        .contract-card {
          border:1px solid rgba(250,204,21,.20);
          border-radius:22px;
          padding:24px;
          background:rgba(250,204,21,.04);
        }

        .contract-card h3 {
          color:#facc15;
          margin-top:0;
        }

        .address {
          color:#9ca3af;
          font-size:13px;
          word-break:break-all;
          margin:14px 0;
        }

        .contract-link {
          display:inline-block;
          text-decoration:none;
          color:#000;
          background:#facc15;
          padding:12px 16px;
          border-radius:12px;
          font-weight:900;
        }

        .contract-link:hover {
          opacity:.9;
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

      <div className="eyebrow">Marketing Rewards</div>

      <h1 className="title">
        Marketing <br />
        <span>Rewards System</span>
      </h1>

      <p className="lead">
        The NetGain Marketing Rewards System is designed to reward ecosystem
        growth through a transparent 10-level structure.
      </p>

      <div className="cards">
        <div className="card">
          <div className="value">25%</div>
          <h3>Total Rewards</h3>
          <p>
            Total marketing rewards distributed through the referral structure.
          </p>
        </div>

        <div className="card">
          <div className="value">10</div>
          <h3>Levels</h3>
          <p>
            Rewards may be distributed across ten referral levels.
          </p>
        </div>

        <div className="card">
          <div className="value">DAO</div>
          <h3>Automated</h3>
          <p>
            Rewards are processed through dedicated smart contracts.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Eligible Activities</h2>

        <p>
          The Marketing Rewards System currently applies to:
        </p>

        <ul>
          <li>Membership NFT Purchases</li>
          <li>Membership NFT Renewals</li>
          <li>Membership NFT Upgrades</li>
          <li>Buy & Stake Participation</li>
        </ul>
      </div>

      <div className="section">
        <h2>Reward Distribution Structure</h2>

        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Reward</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>Level 1</td><td>10%</td></tr>
            <tr><td>Level 2</td><td>4%</td></tr>
            <tr><td>Level 3</td><td>3%</td></tr>
            <tr><td>Level 4</td><td>2%</td></tr>
            <tr><td>Level 5</td><td>1%</td></tr>
            <tr><td>Level 6</td><td>1%</td></tr>
            <tr><td>Level 7</td><td>1%</td></tr>
            <tr><td>Level 8</td><td>1%</td></tr>
            <tr><td>Level 9</td><td>1%</td></tr>
            <tr><td>Level 10</td><td>1%</td></tr>
          </tbody>
        </table>
      </div>

      <div className="highlight">
        <h2>NFT Marketing</h2>

        <p>
          NFT Marketing rewards are generated from Membership NFT purchases,
          renewals and upgrades.
        </p>

        <p>
          Rewards are automatically distributed according to the marketing
          structure defined within the ecosystem.
        </p>
      </div>

      <div className="highlight">
        <h2>Buy & Stake Marketing</h2>

        <p>
          Buy & Stake Marketing rewards are generated through Buy & Stake
          participation.
        </p>

        <p>
          The same reward structure is applied through the dedicated
          Buy & Stake Marketing contract.
        </p>
      </div>

      <div className="section">
        <h2>Why Marketing Rewards?</h2>

        <ul>
          <li>Reward ecosystem growth</li>
          <li>Encourage community expansion</li>
          <li>Create transparent incentive structures</li>
          <li>Automate reward distribution</li>
          <li>Support long-term ecosystem development</li>
        </ul>
      </div>

      <div className="section">
        <h2>Smart Contract References</h2>

        <div className="contracts">

          <div className="contract-card">
            <h3>NFT Marketing Contract</h3>

            <div className="address">
              0xf5116d973f5aC85e11aC0d3fD4bB029Bf789eD90
            </div>

            <a
              href="https://bscscan.com/address/0xf5116d973f5aC85e11aC0d3fD4bB029Bf789eD90"
              target="_blank"
              rel="noopener noreferrer"
              className="contract-link"
            >
              View Contract on BscScan →
            </a>
          </div>

          <div className="contract-card">
            <h3>Buy & Stake Marketing Contract</h3>

            <div className="address">
              0xA9e7f652932f67EE885604D9ac5Cc8B75F5CCB9A
            </div>

            <a
              href="https://bscscan.com/address/0xA9e7f652932f67EE885604D9ac5Cc8B75F5CCB9A"
              target="_blank"
              rel="noopener noreferrer"
              className="contract-link"
            >
              View Contract on BscScan →
            </a>
          </div>

        </div>
      </div>

      <div className="nav">
        <a href="/treasury" className="btn-prev">
          ← Community-Owned Multi-Asset Treasury
        </a>

        <a href="/governance" className="btn-next">
          Next: Governance →
        </a>
      </div>
    </DocsLayout>
  );
}