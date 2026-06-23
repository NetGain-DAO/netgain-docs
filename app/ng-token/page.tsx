import DocsLayout from "@/components/DocsLayout";

export default function NGTokenPage() {
  return (
    <DocsLayout current="NG Token">
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
        .contract-link:hover { opacity:.9; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
      `}</style>

      <div className="eyebrow">NG Token</div>

      <h1 className="title">
        NetGain <br />
        <span>NG Token</span>
      </h1>

      <p className="lead">
        NG is the native utility token of the NetGain DAO ecosystem. It powers
        staking, governance participation, treasury-related mechanisms and
        future ecosystem utilities.
      </p>

      <div className="highlight">
        <h2>Maximum Supply</h2>
        <div className="value">100,000,000 NG</div>
        <p>
          The NG Token has a fixed maximum supply of 100,000,000 tokens.
        </p>
      </div>

      <div className="section">
        <h2>Token Allocation</h2>

        <div className="cards">
          <div className="card">
            <div className="value">50%</div>
            <h3>Reward Pool</h3>
            <p>
              50,000,000 NG allocated to staking rewards and long-term
              ecosystem participation incentives.
            </p>
          </div>

          <div className="card">
            <div className="value">40%</div>
            <h3>NG Vault</h3>
            <p>
              40,000,000 NG allocated to the NG Vault for ecosystem growth,
              Buy & Stake mechanisms and future DAO utilities.
            </p>
          </div>

          <div className="card">
            <div className="value">10%</div>
            <h3>Treasury Reserve</h3>
            <p>
              10,000,000 NG reserved for governance-approved treasury
              strategies, liquidity decisions and future ecosystem needs.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Community-Governed Liquidity</h2>

        <p>
          Initial liquidity allocation is not fixed automatically. The community
          may decide through governance how much of the Treasury Reserve should
          be allocated to liquidity.
        </p>

        <p>
          A governance proposal may define the initial liquidity percentage,
          for example between 1% and 10%, depending on the community-approved
          strategy.
        </p>

        <p>
          The initial liquidity price may also be determined through community
          governance before liquidity is deployed.
        </p>
      </div>

      <div className="section">
        <h2>NG Token Utility</h2>

        <ul>
          <li>Staking participation</li>
          <li>Governance voting</li>
          <li>Treasury participation mechanisms</li>
          <li>Buy & Stake ecosystem flow</li>
          <li>Reward and claim mechanisms</li>
          <li>Future DAO integrations</li>
        </ul>
      </div>

      <div className="highlight">
        <h2>Transparent Token Economy</h2>

        <p>
          NetGain DAO is designed around a fixed maximum supply, transparent
          allocation structure and governance-controlled ecosystem decisions.
        </p>

        <p>
          No unlimited minting.
          <br />
          No hidden allocations.
          <br />
          Transparent on-chain supply.
        </p>
      </div>

      <div className="contract">
        <h2>Smart Contract Reference</h2>

        <div className="contract-title">NG Token Contract</div>

        <div className="contract-address">
          0x25f3424E59D276fFba3AF0f63E8F3aa47C196B60
        </div>

        <a
          href="https://bscscan.com/address/0x25f3424E59D276fFba3AF0f63E8F3aa47C196B60"
          target="_blank"
          rel="noopener noreferrer"
          className="contract-link"
        >
          View Contract on BscScan →
        </a>
      </div>

      <div className="nav">
        <a href="/smart-contracts" className="btn-prev">
          ← NetGain Smart Contracts
        </a>

        <a href="/membership" className="btn-next">
          Next: Membership NFTs →
        </a>
      </div>
    </DocsLayout>
  );
}