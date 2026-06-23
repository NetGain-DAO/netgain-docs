import DocsLayout from "@/components/DocsLayout";

export default function ProblemsSolutionsPage() {
  return (
    <DocsLayout current="Problems & Solutions">
      <style>{`
        .eyebrow {
          color: #facc15;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 5px;
          text-transform: uppercase;
        }

        .title {
          margin-top: 20px;
          font-size: 46px;
          line-height: 1.1;
          font-weight: 900;
          color: #fff;
        }

        .title span {
          color: #facc15;
        }

        .lead {
          margin-top: 24px;
          color: #fff;
          font-size: 18px;
          line-height: 1.9;
          max-width: 850px;
        }

        .section {
          margin-top: 50px;
          max-width: 900px;
        }

        .section h2 {
          color: #facc15;
          margin-bottom: 18px;
          font-size: 28px;
        }

        .section h3 {
          color: #fff;
          margin-bottom: 14px;
          font-size: 22px;
        }

        .section p,
        .section li {
          color: #fff;
          line-height: 1.9;
        }

        .problem {
          margin-top: 40px;
          border: 1px solid rgba(250,204,21,.20);
          border-radius: 24px;
          padding: 28px;
          background: rgba(250,204,21,.04);
        }

        .problem h3 {
          color: #facc15;
          margin-top: 0;
        }

        .solution {
          margin-top: 18px;
          padding: 18px;
          border-left: 4px solid #facc15;
          background: rgba(250,204,21,.05);
          border-radius: 12px;
        }

        .solution strong {
          color: #facc15;
        }

        .highlight {
          margin-top: 50px;
          border: 1px solid rgba(250,204,21,.20);
          border-radius: 24px;
          padding: 30px;
          background: rgba(250,204,21,.04);
        }

        .highlight h2 {
          margin-top: 0;
          color: #facc15;
        }

        .nav {
          margin-top: 50px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn-prev,
        .btn-next {
          text-decoration: none;
          padding: 14px 18px;
          border-radius: 14px;
          font-weight: 900;
        }

        .btn-prev {
          color: #facc15;
          border: 1px solid rgba(250,204,21,.25);
        }

        .btn-next {
          background: #facc15;
          color: #000;
        }
      `}</style>

      <div className="eyebrow">Problems & Solutions</div>

      <h1 className="title">
        Problems <br />
        <span>& Solutions</span>
      </h1>

      <p className="lead">
        NetGain DAO was designed to address some of the most common
        challenges found in traditional finance and blockchain ecosystems.
      </p>

      <div className="problem">
        <h3>Problem 1: Limited Access to Large-Scale Opportunities</h3>

        <p>
          Many individuals lack the capital or resources required to
          participate in larger investment opportunities.
        </p>

        <div className="solution">
          <strong>Solution:</strong> NetGain DAO combines community
          participation through a shared treasury model, creating access
          to broader opportunities through collective participation.
        </div>
      </div>

      <div className="problem">
        <h3>Problem 2: Lack of Transparency</h3>

        <p>
          Many investment platforms operate with limited visibility into
          how funds are managed and deployed.
        </p>

        <div className="solution">
          <strong>Solution:</strong> Smart contracts and on-chain
          transactions provide transparency that can be independently
          verified by the community.
        </div>
      </div>

      <div className="problem">
        <h3>Problem 3: Short-Term Speculation</h3>

        <p>
          Many blockchain projects focus primarily on short-term price
          movements rather than sustainable ecosystem growth.
        </p>

        <div className="solution">
          <strong>Solution:</strong> Membership NFTs, staking,
          governance and treasury participation encourage long-term
          ecosystem alignment.
        </div>
      </div>

      <div className="problem">
        <h3>Problem 4: Centralized Decision Making</h3>

        <p>
          Traditional organizations often concentrate decision-making
          power within a small group.
        </p>

        <div className="solution">
          <strong>Solution:</strong> Governance participation allows
          active members to contribute to important ecosystem decisions.
        </div>
      </div>

      <div className="problem">
        <h3>Problem 5: Single Revenue Models</h3>

        <p>
          Many projects depend on a single source of value creation,
          increasing long-term risk.
        </p>

        <div className="solution">
          <strong>Solution:</strong> NetGain DAO combines Membership
          NFTs, staking, treasury participation, governance and
          affiliate rewards within one ecosystem.
        </div>
      </div>

      <div className="problem">
        <h3>Problem 6: Passive Communities</h3>

        <p>
          Many communities remain passive spectators rather than active
          contributors.
        </p>

        <div className="solution">
          <strong>Solution:</strong> Members are encouraged to
          participate through governance, staking, treasury eligibility
          and community growth initiatives.
        </div>
      </div>

      <div className="problem">
        <h3>Problem 7: Limited Treasury Strategies</h3>

        <p>
          Many projects rely on a single token or narrow treasury
          structure.
        </p>

        <div className="solution">
          <strong>Solution:</strong> NetGain DAO is designed as a
          Community-Owned Multi-Asset Treasury capable of holding
          multiple governance-approved assets.
        </div>
      </div>

      <div className="highlight">
        <h2>The NetGain Approach</h2>

        <ul>
          <li>Community Ownership</li>
          <li>Multi-Asset Treasury Management</li>
          <li>Transparent Smart Contracts</li>
          <li>Governance Participation</li>
          <li>Long-Term Incentives</li>
          <li>Sustainable Ecosystem Design</li>
        </ul>
      </div>

      <div className="section">
        <h2>Looking Forward</h2>

        <p>
          The objective of NetGain DAO is to create a sustainable
          ecosystem where community participation, treasury growth,
          governance and transparency work together to create
          long-term value.
        </p>
      </div>

      <div className="nav">
        <a href="/what-is-netgain" className="btn-prev">
          ← What is NetGain DAO?
        </a>

        <a href="/smart-contracts" className="btn-next">
          Next: NetGain Smart Contracts →
        </a>
      </div>
    </DocsLayout>
  );
}