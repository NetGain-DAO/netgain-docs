import DocsLayout from "@/components/DocsLayout";

export default function GovernancePage() {
  return (
    <DocsLayout current="Governance">
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
        .value { font-size:38px; font-weight:900; color:#facc15; }
        .highlight { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:30px; background:rgba(250,204,21,.04); }
        .highlight h2 { margin-top:0; color:#facc15; }
        .contracts { display:grid; grid-template-columns:repeat(auto-fit,minmax(280px,1fr)); gap:16px; margin-top:24px; }
        .contract-card { border:1px solid rgba(250,204,21,.20); border-radius:22px; padding:24px; background:rgba(250,204,21,.04); }
        .contract-card h3 { color:#facc15; margin-top:0; }
        .address { color:#9ca3af; font-size:13px; word-break:break-all; margin:14px 0; }
        .contract-link { display:inline-block; text-decoration:none; color:#000; background:#facc15; padding:12px 16px; border-radius:12px; font-weight:900; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
      `}</style>

      <div className="eyebrow">Governance</div>

      <h1 className="title">
        Community <br />
        <span>Governance System</span>
      </h1>

      <p className="lead">
        NetGain DAO governance allows the community to vote on important
        ecosystem decisions, treasury actions and future development
        directions through transparent on-chain mechanisms.
      </p>

      <div className="cards">
        <div className="card">
          <div className="value">YES / NO</div>
          <h3>Voting</h3>
          <p>Members vote on proposals using a clear Yes or No system.</p>
        </div>

        <div className="card">
          <div className="value">1 NFT</div>
          <h3>One Vote Access</h3>
          <p>Each Membership NFT may vote once per proposal.</p>
        </div>

        <div className="card">
          <div className="value">EXECUTOR</div>
          <h3>Execution</h3>
          <p>Approved proposals are executed through the Executor contract.</p>
        </div>
      </div>

      <div className="section">
        <h2>Voting Power</h2>

        <p>
          Each Membership NFT can participate in governance voting once per
          proposal.
        </p>

        <p>
          Voting power is determined by Membership level and effective staking
          participation.
        </p>

        <ul>
          <li>Membership NFT level</li>
          <li>Effective staking weight</li>
          <li>Proposal participation</li>
        </ul>
      </div>

      <div className="highlight">
        <h2>Treasury Protection</h2>

        <p>
          Treasury funds cannot move without community approval.
        </p>

        <p>
          Any treasury-related action must pass governance before it can be
          executed.
        </p>

        <p>
          No developer, administrator, founder, or individual participant can
          directly withdraw treasury assets for personal use.
        </p>
      </div>

      <div className="section">
        <h2>Executor-Based Execution</h2>

        <p>
          Approved proposals are executed through the NetGain Executor system.
        </p>

        <p>
          This creates a separation between voting and execution, helping ensure
          that treasury actions follow predefined governance and smart contract
          rules.
        </p>
      </div>

      <div className="section">
        <h2>On-Chain Transparency</h2>

        <p>
          Governance activity, proposal status, voting results and executed
          actions are designed to remain publicly verifiable on-chain.
        </p>

        <p>
          Community members may independently review governance contracts and
          execution records through BscScan.
        </p>
      </div>

      <div className="section">
        <h2>Governance May Cover</h2>

        <ul>
          <li>Treasury allocations</li>
          <li>Treasury profit distributions</li>
          <li>Liquidity-related decisions</li>
          <li>Ecosystem upgrades</li>
          <li>Strategic treasury actions</li>
          <li>Future DAO proposals</li>
        </ul>
      </div>

      <div className="section">
        <h2>Smart Contract References</h2>

        <div className="contracts">
          <div className="contract-card">
            <h3>Governance Contract</h3>

            <div className="address">
              0x4b5242fEFC1301Bb155acd9EAF00265C1A27E820
            </div>

            <a
              href="https://bscscan.com/address/0x4b5242fEFC1301Bb155acd9EAF00265C1A27E820"
              target="_blank"
              rel="noopener noreferrer"
              className="contract-link"
            >
              View Contract on BscScan →
            </a>
          </div>

          <div className="contract-card">
            <h3>Executor Contract</h3>

            <div className="address">
              0xD2BBD6B3DAcE1D1a747A623193c1124E5086E148
            </div>

            <a
              href="https://bscscan.com/address/0xD2BBD6B3DAcE1D1a747A623193c1124E5086E148"
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
        <a href="/marketing-rewards" className="btn-prev">
          ← Marketing Rewards
        </a>

        <a href="/platform-parameters" className="btn-next">
          Next: Platform Parameters →
        </a>
      </div>
    </DocsLayout>
  );
}