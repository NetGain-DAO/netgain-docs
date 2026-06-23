import DocsLayout from "@/components/DocsLayout";

export default function CommunityFirstPage() {
  return (
    <DocsLayout current="Community First">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }
        .title { margin-top:20px; font-size:46px; line-height:1.1; font-weight:900; color:#fff; }
        .title span { color:#facc15; }
        .lead { margin-top:24px; color:#fff; font-size:18px; line-height:1.9; max-width:850px; }
        .section { margin-top:50px; max-width:900px; }
        .section h2 { color:#facc15; margin-bottom:18px; font-size:28px; }
        .section p, .section li { color:#fff; line-height:1.9; }
        .highlight { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:30px; background:rgba(250,204,21,.04); }
        .highlight h2 { margin-top:0; color:#facc15; }
        .cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; margin-top:24px; }
        .card { border:1px solid rgba(250,204,21,.20); border-radius:22px; padding:24px; background:rgba(250,204,21,.04); }
        .card h3 { color:#facc15; margin-top:0; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
      `}</style>

      <div className="eyebrow">Community First</div>

      <h1 className="title">
        The Community <br />
        <span>Is the Real Team</span>
      </h1>

      <p className="lead">
        NetGain DAO is built around a simple principle: the strength of the
        ecosystem comes from the community, not from any single founder,
        developer, administrator, or individual.
      </p>

      <div className="cards">
        <div className="card">
          <h3>Community Growth</h3>
          <p>
            Marketing becomes stronger when the community is active and engaged.
          </p>
        </div>

        <div className="card">
          <h3>Community Treasury</h3>
          <p>
            Treasury direction is guided by community governance and transparent execution.
          </p>
        </div>

        <div className="card">
          <h3>Community Governance</h3>
          <p>
            Members participate in decisions that shape the future of the ecosystem.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Community Drives Growth</h2>

        <p>
          The growth of NetGain DAO depends on community participation.
          A strong and active community supports marketing, adoption,
          education, governance participation, and ecosystem expansion.
        </p>

        <p>
          The more active the community becomes, the stronger the ecosystem can
          become over time.
        </p>
      </div>

      <div className="section">
        <h2>Community Controls the Treasury</h2>

        <p>
          The treasury does not belong to a founder, developer, administrator,
          or private group.
        </p>

        <p>
          Treasury direction is controlled through governance, voting, and
          transparent smart contract execution. The community decides how
          treasury resources may be allocated and when treasury actions may be
          executed.
        </p>
      </div>

      <div className="highlight">
        <h2>Code Over Promises</h2>

        <p>
          NetGain DAO is designed around publicly verifiable smart contracts.
        </p>

        <p>
          Do not rely on promises alone. Review the code, verify the contracts,
          and follow on-chain activity.
        </p>

        <p>
          Trust should come from transparent code, open verification, and
          community governance.
        </p>
      </div>

      <div className="section">
        <h2>Smart Contract Foundation</h2>

        <p>
          NetGain DAO operates through smart contracts deployed on BNB Smart Chain.
          Core infrastructure is publicly verifiable and may be independently
          reviewed by community members and future security auditors.
        </p>
      </div>

      <div className="section">
        <h2>Why Community First Matters</h2>

        <ul>
          <li>The community supports ecosystem growth.</li>
          <li>The community participates in governance.</li>
          <li>The community helps direct treasury decisions.</li>
          <li>Smart contracts protect the rules of the ecosystem.</li>
          <li>Transparency reduces reliance on individuals and promises.</li>
        </ul>
      </div>

      <div className="nav">
        <a href="/risks" className="btn-prev">
          ← Risks
        </a>

        <a href="/building-wealth-together" className="btn-next">
          Next: Building Wealth Together →
        </a>
      </div>
    </DocsLayout>
  );
}