import DocsLayout from "@/components/DocsLayout";

export default function TransparencySecurityPage() {
  return (
    <DocsLayout current="Transparency & Security">
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
          font-size:36px;
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

        .contracts {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:16px;
          margin-top:24px;
        }

        .contract {
          border:1px solid rgba(250,204,21,.20);
          border-radius:22px;
          padding:22px;
          background:rgba(250,204,21,.04);
        }

        .contract h3 {
          color:#facc15;
          margin-top:0;
        }

        .address {
          color:#9ca3af;
          font-size:13px;
          word-break:break-all;
          margin:14px 0;
        }

        .link {
          display:inline-block;
          text-decoration:none;
          color:#000;
          background:#facc15;
          padding:10px 14px;
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

      <div className="eyebrow">Transparency & Security</div>

      <h1 className="title">
        Transparency <br />
        <span>& Security</span>
      </h1>

      <p className="lead">
        NetGain DAO is designed around transparency, verifiable smart contracts,
        community governance, and treasury protection mechanisms.
      </p>

      <div className="cards">
        <div className="card">
          <div className="value">100%</div>
          <h3>On-Chain</h3>
          <p>
            Smart contracts and transactions can be independently verified.
          </p>
        </div>

        <div className="card">
          <div className="value">DAO</div>
          <h3>Governed</h3>
          <p>
            Treasury decisions are controlled through governance mechanisms.
          </p>
        </div>

        <div className="card">
          <div className="value">Public</div>
          <h3>Transparent</h3>
          <p>
            Community members may review contracts and transactions at any time.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Public Smart Contracts</h2>

        <p>
          NetGain DAO operates through publicly verifiable smart contracts.
          Contract logic, transactions and treasury activity can be reviewed
          through BscScan and blockchain explorers.
        </p>
      </div>

      <div className="highlight">
        <h2>Treasury Protection</h2>

        <p>
          Treasury assets are protected through governance and execution
          mechanisms designed to prevent direct unauthorized withdrawals.
        </p>

        <p>
          Treasury-related actions require governance approval and execution
          through dedicated smart contract infrastructure.
        </p>
      </div>

      <div className="section">
        <h2>Governance Protection</h2>

        <p>
          Governance provides a transparent framework for community
          participation and treasury decision making.
        </p>

        <p>
          Community-approved actions are executed through predefined smart
          contract rules rather than manual treasury control.
        </p>
      </div>

      <div className="section">
        <h2>Executor Protection</h2>

        <p>
          The NetGain Executor contract separates proposal approval from
          proposal execution.
        </p>

        <p>
          This additional layer helps ensure that treasury actions follow the
          governance process before execution.
        </p>
      </div>

      <div className="section">
        <h2>Community Transparency</h2>

        <ul>
          <li>Public smart contracts</li>
          <li>Public transaction history</li>
          <li>Public treasury activity</li>
          <li>Public governance records</li>
          <li>Independent blockchain verification</li>
        </ul>
      </div>

      <div className="section">
        <h2>Core Contract References</h2>

        <div className="contracts">

          <div className="contract">
            <h3>Registry</h3>
            <div className="address">
              0xC8D3c9B33311557FAC80306F9b229A1934435Cba
            </div>
            <a href="https://bscscan.com/address/0xC8D3c9B33311557FAC80306F9b229A1934435Cba" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

          <div className="contract">
            <h3>NFT</h3>
            <div className="address">
              0x85443fF1818d76E64E755901EA33b6bDEB315495
            </div>
            <a href="https://bscscan.com/address/0x85443fF1818d76E64E755901EA33b6bDEB315495" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

          <div className="contract">
            <h3>Staking</h3>
            <div className="address">
              0x53B8c41A0C217F9eeBc61d58a621fFEE83eFD9C7
            </div>
            <a href="https://bscscan.com/address/0x53B8c41A0C217F9eeBc61d58a621fFEE83eFD9C7" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

          <div className="contract">
            <h3>Treasury</h3>
            <div className="address">
              0xE8C736EF72F0F7519C3fA8B14a9713498a7f02aA
            </div>
            <a href="https://bscscan.com/address/0xE8C736EF72F0F7519C3fA8B14a9713498a7f02aA" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

          <div className="contract">
            <h3>Governance</h3>
            <div className="address">
              0x4b5242fEFC1301Bb155acd9EAF00265C1A27E820
            </div>
            <a href="https://bscscan.com/address/0x4b5242fEFC1301Bb155acd9EAF00265C1A27E820" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

          <div className="contract">
            <h3>Executor</h3>
            <div className="address">
              0xD2BBD6B3DAcE1D1a747A623193c1124E5086E148
            </div>
            <a href="https://bscscan.com/address/0xD2BBD6B3DAcE1D1a747A623193c1124E5086E148" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

          <div className="contract">
            <h3>Reader</h3>
            <div className="address">
              0xE1e4006C7df2E892083367c4ec761e7c59Ea6Cb0
            </div>
            <a href="https://bscscan.com/address/0xE1e4006C7df2E892083367c4ec761e7c59Ea6Cb0" target="_blank" rel="noreferrer" className="link">
              View Contract →
            </a>
          </div>

        </div>
      </div>

      <div className="nav">
        <a href="/treasury-participation" className="btn-prev">
          ← Treasury Participation
        </a>

        <a href="/risks" className="btn-next">
          Next: Risks →
        </a>
      </div>
    </DocsLayout>
  );
}