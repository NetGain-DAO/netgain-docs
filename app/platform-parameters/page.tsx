import DocsLayout from "@/components/DocsLayout";

const parameters = [
  ["NG Max Supply", "100,000,000 NG", "Fixed maximum supply of the NG Token."],
  ["Bronze Membership", "$100", "Entry-level Membership NFT."],
  ["Silver Membership", "$500", "Enhanced Membership NFT."],
  ["Gold Membership", "$1500", "Highest Membership NFT tier."],
  ["Membership Duration", "365 Days", "Each Membership NFT remains active for 12 months."],
  ["Membership Renewal", "10%", "Renewal cost is 10% of the original membership price."],
  ["Bronze Multiplier", "X1", "Bronze effective staking multiplier."],
  ["Silver Multiplier", "X2", "Silver effective staking multiplier."],
  ["Gold Multiplier", "X3", "Gold effective staking multiplier."],
  ["Staking Lock Period", "365 Days", "Each staking position has an independent lock period."],
  ["Reward Cycle", "28 Days", "The staking system operates in 28-day reward cycles."],
  ["Claim Limit", "10%", "Maximum claim per cycle is 10% of staked NG."],
  ["Unstake Fee", "10%", "Fee applied when withdrawing staked NG Tokens."],
  ["Marketing Rewards", "25%", "Total marketing reward allocation."],
  ["Marketing Levels", "10 Levels", "Rewards may be distributed across ten levels."],
];

export default function PlatformParametersPage() {
  return (
    <DocsLayout current="Platform Parameters">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }
        .title { margin-top:20px; font-size:46px; line-height:1.1; font-weight:900; color:#fff; }
        .title span { color:#facc15; }
        .lead { margin-top:24px; color:#fff; font-size:18px; line-height:1.9; max-width:850px; }
        .section { margin-top:50px; max-width:960px; }
        .section h2 { color:#facc15; margin-bottom:18px; font-size:28px; }
        .section p, .section li { color:#fff; line-height:1.9; }
        .grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin-top:28px; }
        .card { border:1px solid rgba(250,204,21,.20); border-radius:22px; padding:24px; background:rgba(250,204,21,.04); }
        .card h3 { color:#facc15; margin-top:0; }
        .value { font-size:30px; line-height:1.1; font-weight:900; color:#facc15; margin:12px 0; }
        .highlight { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:30px; background:rgba(250,204,21,.04); max-width:960px; }
        .highlight h2 { margin-top:0; color:#facc15; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
      `}</style>

      <div className="eyebrow">Platform Parameters</div>

      <h1 className="title">
        Core Platform <br />
        <span>Parameters</span>
      </h1>

      <p className="lead">
        Platform Parameters summarize the key numbers and operating rules used
        across the NetGain DAO ecosystem.
      </p>

      <div className="section">
        <h2>Current Ecosystem Parameters</h2>

        <div className="grid">
          {parameters.map(([title, value, text]) => (
            <div className="card" key={title}>
              <h3>{title}</h3>
              <div className="value">{value}</div>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="highlight">
        <h2>Parameter Governance</h2>

        <p>
          These parameters represent the current NetGain DAO configuration and
          ecosystem rules.
        </p>

        <p>
          Certain parameters may be updated in the future through governance,
          smart contract upgrades, or community-approved proposals when
          required for ecosystem sustainability and long-term development.
        </p>
      </div>

      <div className="section">
        <h2>Why Parameters Matter</h2>

        <ul>
          <li>They help members understand the current system rules.</li>
          <li>They make the ecosystem easier to verify and explain.</li>
          <li>They reduce confusion around fees, cycles, rewards and membership terms.</li>
          <li>They provide a transparent reference for community discussions.</li>
        </ul>
      </div>

      <div className="nav">
        <a href="/governance" className="btn-prev">
          ← Governance
        </a>

        <a href="/recycling-system" className="btn-next">
          Next: Recycling System →
        </a>
      </div>
    </DocsLayout>
  );
}