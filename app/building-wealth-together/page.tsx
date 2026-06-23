import DocsLayout from "@/components/DocsLayout";

export default function BuildingWealthTogetherPage() {
  return (
    <DocsLayout current="Building Wealth Together">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }

        .title {
          margin-top:20px;
          font-size:52px;
          line-height:1.1;
          font-weight:900;
          color:#fff;
        }

        .title span {
          color:#facc15;
        }

        .lead {
          margin-top:24px;
          color:#fff;
          font-size:20px;
          line-height:1.9;
          max-width:900px;
        }

        .section {
          margin-top:60px;
          max-width:900px;
        }

        .section h2 {
          color:#facc15;
          margin-bottom:18px;
          font-size:30px;
        }

        .section p,
        .section li {
          color:#fff;
          line-height:1.9;
          font-size:17px;
        }

        .cards {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
          gap:18px;
          margin-top:30px;
        }

        .card {
          border:1px solid rgba(250,204,21,.20);
          border-radius:24px;
          padding:28px;
          background:rgba(250,204,21,.04);
        }

        .card h3 {
          color:#facc15;
          margin-top:0;
          margin-bottom:12px;
        }

        .highlight {
          margin-top:60px;
          border:1px solid rgba(250,204,21,.20);
          border-radius:28px;
          padding:40px;
          background:rgba(250,204,21,.05);
        }

        .highlight h2 {
          margin-top:0;
          color:#facc15;
          font-size:34px;
        }

        .quote {
          font-size:24px;
          line-height:1.8;
          color:white;
          font-weight:700;
        }

        .nav {
          margin-top:60px;
          display:flex;
          justify-content:space-between;
          gap:12px;
          flex-wrap:wrap;
        }

        .btn-prev {
          text-decoration:none;
          padding:14px 18px;
          border-radius:14px;
          font-weight:900;
          color:#facc15;
          border:1px solid rgba(250,204,21,.25);
        }
      `}</style>

      <div className="eyebrow">Building Wealth Together</div>

      <h1 className="title">
        Building <br />
        <span>Wealth Together</span>
      </h1>

      <p className="lead">
        NetGain DAO was created around a simple vision:
        bringing people together through transparent technology,
        community participation and long-term thinking.
      </p>

      <div className="cards">

        <div className="card">
          <h3>Community Ownership</h3>
          <p>
            The ecosystem is designed around community participation,
            governance and collective decision making.
          </p>
        </div>

        <div className="card">
          <h3>Long-Term Thinking</h3>
          <p>
            Sustainable growth is built over time through patience,
            consistency and responsible participation.
          </p>
        </div>

        <div className="card">
          <h3>Transparency</h3>
          <p>
            Smart contracts, treasury activity and governance actions
            remain publicly verifiable on-chain.
          </p>
        </div>

      </div>

      <div className="section">
        <h2>More Than A Platform</h2>

        <p>
          NetGain DAO is designed to be more than a collection of smart
          contracts. It is a community-driven ecosystem built around shared
          participation, treasury growth, governance and long-term value
          creation.
        </p>
      </div>

      <div className="section">
        <h2>Growing Together</h2>

        <p>
          Every Membership NFT holder, every voter, every participant and
          every community contributor helps shape the future of the ecosystem.
        </p>

        <p>
          The strength of the project comes from the collective efforts of
          its community rather than any individual participant.
        </p>
      </div>

      <div className="section">
        <h2>Built For Sustainability</h2>

        <p>
          Through governance, treasury management, staking, recycling and
          transparent smart contracts, NetGain DAO is designed to support
          long-term ecosystem sustainability.
        </p>
      </div>

      <div className="highlight">

        <h2>Final Message</h2>

        <div className="quote">
          NetGain DAO is not built around short-term speculation.
          <br /><br />
          It is built around community ownership,
          transparent governance,
          long-term participation
          and sustainable ecosystem growth.
          <br /><br />
          Together we build.
          <br />
          Together we govern.
          <br />
          Together we grow.
          <br /><br />
          Building Wealth Together.
        </div>

      </div>

      <div className="nav">
        <a href="/community-first" className="btn-prev">
          ← Community First
        </a>
      </div>
    </DocsLayout>
  );
}