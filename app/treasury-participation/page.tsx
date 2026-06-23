import DocsLayout from "@/components/DocsLayout";

export default function TreasuryParticipationPage() {
  return (
    <DocsLayout current="Treasury Participation">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }
        .title { margin-top:20px; font-size:46px; line-height:1.1; font-weight:900; color:#fff; }
        .title span { color:#facc15; }
        .lead { margin-top:24px; color:#fff; font-size:18px; line-height:1.9; max-width:850px; }
        .section { margin-top:50px; max-width:900px; }
        .section h2 { color:#facc15; margin-bottom:18px; font-size:28px; }
        .section p, .section li { color:#fff; line-height:1.9; }
        .cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:24px; }
        .card { border:1px solid rgba(250,204,21,.20); border-radius:22px; padding:24px; background:rgba(250,204,21,.04); }
        .card h3 { color:#facc15; margin-top:0; }
        .value { font-size:42px; font-weight:900; color:#facc15; }
        .highlight { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:30px; background:rgba(250,204,21,.04); }
        .highlight h2 { margin-top:0; color:#facc15; }
        .contract { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:28px; background:rgba(250,204,21,.04); }
        .contract h2 { margin-top:0; color:#facc15; }
        .contract-title { color:#fff; font-weight:700; margin-bottom:10px; }
        .contract-address { color:#9ca3af; font-size:14px; word-break:break-all; margin-bottom:18px; }
        .contract-link { display:inline-block; text-decoration:none; color:#000; background:#facc15; padding:12px 18px; border-radius:12px; font-weight:900; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
      `}</style>

      <div className="eyebrow">Treasury Participation</div>

      <h1 className="title">
        Treasury Profit <br />
        <span>Participation</span>
      </h1>

      <p className="lead">
        Treasury Participation allows eligible NetGain DAO members to
        participate in governance-approved treasury profit distributions using
        their staked NG position.
      </p>

      <div className="cards">
        <div className="card">
          <div className="value">3</div>
          <h3>Commit Days</h3>
          <p>Eligible users have 3 days to commit to a distribution.</p>
        </div>

        <div className="card">
          <div className="value">7</div>
          <h3>Claim Window</h3>
          <p>Users have 7 days from distribution creation to claim USDT.</p>
        </div>

        <div className="card">
          <div className="value">USDT</div>
          <h3>Profit Distribution</h3>
          <p>Participants receive USDT from approved treasury distributions.</p>
        </div>
      </div>

      <div className="section">
        <h2>How Treasury Participation Works</h2>

        <p>
          Treasury Profit Distributions are created after a finalized treasury
          snapshot. The snapshot determines eligible participants and their
          maximum distribution participation based on effective staking data.
        </p>

        <p>
          Eligible users may commit staked NG to participate in the distribution
          and later claim their approved USDT amount.
        </p>
      </div>

      <div className="section">
        <h2>Distribution Process</h2>

        <ul>
          <li>Treasury profit distribution is created.</li>
          <li>A finalized snapshot determines eligibility.</li>
          <li>Eligible members commit staked NG.</li>
          <li>After the commit period ends, users claim USDT.</li>
          <li>The committed NG is redeemed through the staking system.</li>
          <li>Unclaimed USDT may return to the treasury after expiration.</li>
        </ul>
      </div>

      <div className="highlight">
        <h2>Snapshot-Based Eligibility</h2>

        <p>
          Treasury participation is based on finalized snapshot data. The system
          checks each eligible NFT position, effective staking weight, maximum
          USDT entitlement and required NG amount.
        </p>

        <p>
          This helps ensure that treasury profit participation is calculated
          transparently and consistently.
        </p>
      </div>

      <div className="section">
        <h2>Commit Period</h2>

        <p>
          Each distribution includes a 3-day commit period. During this period,
          eligible participants may commit their available distribution amount.
        </p>

        <p>
          Users may commit the maximum available amount or a custom amount,
          depending on the distribution parameters and their eligibility.
        </p>
      </div>

      <div className="section">
        <h2>Claim Window</h2>

        <p>
          After the commit period ends, eligible committed users may claim their
          USDT during the active claim window.
        </p>

        <p>
          The claim window lasts for 7 days from distribution creation.
        </p>
      </div>

      <div className="section">
        <h2>Unclaimed Funds</h2>

        <p>
          If a distribution expires and USDT remains unclaimed, the remaining
          USDT may be swept back to the treasury.
        </p>

        <p>
          This ensures that unused distribution capital remains inside the
          NetGain DAO treasury ecosystem.
        </p>
      </div>

      <div className="section">
        <h2>Why Treasury Participation Matters</h2>

        <ul>
          <li>Connects treasury growth with community participation.</li>
          <li>Allows eligible members to benefit from approved treasury profits.</li>
          <li>Uses effective staking data for transparent distribution logic.</li>
          <li>Keeps unclaimed funds inside the treasury ecosystem.</li>
          <li>Creates a direct link between staking and treasury value.</li>
        </ul>
      </div>

      <div className="contract">
        <h2>Smart Contract Reference</h2>

        <div className="contract-title">
          Treasury Profit Distribution Contract
        </div>

        <div className="contract-address">
          0xD5ff8711Dd5BbB3e3Ea795D6033dEF3C4bF74168
        </div>

        <a
          href="https://bscscan.com/address/0xD5ff8711Dd5BbB3e3Ea795D6033dEF3C4bF74168"
          target="_blank"
          rel="noopener noreferrer"
          className="contract-link"
        >
          View Contract on BscScan →
        </a>
      </div>

      <div className="nav">
        <a href="/recycling-system" className="btn-prev">
          ← Recycling System
        </a>

        <a href="/marketing-rewards" className="btn-next">
          Next: Marketing & Rewards →
        </a>
      </div>
    </DocsLayout>
  );
}