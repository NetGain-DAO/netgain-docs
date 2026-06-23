import DocsLayout from "@/components/DocsLayout";

export default function MembershipPage() {
  return (
    <DocsLayout current="Membership NFTs">
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

        .section p,
        .section li {
          color: #fff;
          line-height: 1.9;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .card {
          border: 1px solid rgba(250,204,21,.20);
          border-radius: 22px;
          padding: 24px;
          background: rgba(250,204,21,.04);
        }

        .card h3 {
          color: #facc15;
          margin-top: 0;
        }

        .price {
          font-size: 42px;
          font-weight: 900;
          color: #facc15;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        th {
          background: rgba(250,204,21,.08);
          color: #facc15;
        }

        th,
        td {
          border: 1px solid rgba(250,204,21,.15);
          padding: 14px;
          text-align: left;
        }

        td {
          color: white;
        }

        .highlight {
          margin-top: 40px;
          border: 1px solid rgba(250,204,21,.20);
          border-radius: 24px;
          padding: 30px;
          background: rgba(250,204,21,.04);
        }

        .highlight h2 {
          margin-top: 0;
          color: #facc15;
        }

        .contract {
          margin-top: 50px;
          border: 1px solid rgba(250,204,21,.20);
          border-radius: 24px;
          padding: 24px;
        }

        .contract-address {
          margin-top: 12px;
          word-break: break-all;
          color: #facc15;
          font-weight: 700;
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
          .contract {
  margin-top: 50px;
  border: 1px solid rgba(250,204,21,.20);
  border-radius: 24px;
  padding: 28px;
  background: rgba(250,204,21,.04);
}

.contract h2 {
  margin-top: 0;
  color: #facc15;
}

.contract-title {
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 10px;
}

.contract-address {
  color: #9ca3af;
  font-size: 14px;
  word-break: break-all;
  margin-bottom: 18px;
}

.contract-link {
  display: inline-block;
  text-decoration: none;
  color: #000;
  background: #facc15;
  padding: 12px 18px;
  border-radius: 12px;
  font-weight: 900;
}

.contract-link:hover {
  opacity: .9;
}
      `}</style>

      <div className="eyebrow">Membership NFTs</div>

      <h1 className="title">
        NetGain DAO <br />
        <span>Membership NFTs</span>
      </h1>

      <p className="lead">
        Membership NFTs provide access to the NetGain DAO ecosystem and unlock
        participation in staking, governance, treasury-related opportunities,
        affiliate rewards and future ecosystem benefits.
      </p>

      <div className="section">
        <h2>Membership Tiers</h2>

        <div className="cards">
          <div className="card">
            <div className="price">$100</div>
            <h3>Bronze Membership</h3>
            <p>Entry-level participation within the NetGain DAO ecosystem.</p>
          </div>

          <div className="card">
            <div className="price">$500</div>
            <h3>Silver Membership</h3>
            <p>Enhanced participation with increased staking multiplier.</p>
          </div>

          <div className="card">
            <div className="price">$1500</div>
            <h3>Gold Membership</h3>
            <p>Maximum membership level and highest staking multiplier.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Membership Multipliers</h2>

        <table>
          <thead>
            <tr>
              <th>Membership</th>
              <th>Multiplier</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bronze</td>
              <td>X1</td>
            </tr>
            <tr>
              <td>Silver</td>
              <td>X2</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>X3</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Membership Benefits</h2>

        <ul>
          <li>Governance Rights</li>
          <li>Treasury Participation Eligibility</li>
          <li>NG Token Staking Access</li>
          <li>Affiliate Program Access</li>
          <li>DAO Membership Access</li>
          <li>Membership Upgrade Eligibility</li>
          <li>Transferable Membership NFT</li>
          <li>Future Ecosystem Benefits</li>
        </ul>
      </div>

      <div className="highlight">
        <h2>Membership Validity</h2>

        <p>
          Every Membership NFT remains active for 12 months from the purchase
          date.
        </p>

        <p>
          After expiration, governance rights, treasury participation,
          staking rewards and affiliate rewards become inactive until
          renewal.
        </p>
      </div>

      <div className="section">
        <h2>Membership Renewal</h2>

        <p>
          Membership NFTs can be renewed for 10% of the original Membership
          price.
        </p>

        <table>
          <thead>
            <tr>
              <th>Membership</th>
              <th>Renewal Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bronze</td>
              <td>$10</td>
            </tr>
            <tr>
              <td>Silver</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Gold</td>
              <td>$150</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2>Membership Upgrades</h2>

        <ul>
          <li>Bronze → Silver</li>
          <li>Bronze → Gold</li>
          <li>Silver → Gold</li>
        </ul>

        <p>
          Members only pay the difference between Membership levels when
          upgrading.
        </p>
      </div>

      <div className="section">
        <h2>Transferable Membership NFTs</h2>

        <p>
          Membership NFTs may be transferred using the dedicated Membership
          Transfer mechanism built into the smart contract.
        </p>

        <p>
          Only one Membership NFT may exist per wallet at any time.
        </p>
      </div>

      <div className="section">
        <h2>Affiliate Integration</h2>

        <p>
          Each Membership NFT permanently stores its referral relationship
          within the smart contract, enabling transparent affiliate reward
          distribution.
        </p>
      </div>

      <div className="section">
        <h2>Governance Rights</h2>

        <p>
          All active Membership NFT holders may participate in governance
          voting and future DAO proposals.
        </p>
      </div>

      <div className="contract">
  <h2>Smart Contract Reference</h2>

  <div className="contract-title">
    Membership NFT Contract
  </div>

  <div className="contract-address">
    0x85443fF1818d76E64E755901EA33b6bDEB315495
  </div>

  <a
    href="https://bscscan.com/address/0x85443fF1818d76E64E755901EA33b6bDEB315495"
    target="_blank"
    rel="noopener noreferrer"
    className="contract-link"
  >
    View Contract on BscScan →
  </a>
</div>

      <div className="nav">
        <a href="/tokenomics" className="btn-prev">
          ← Tokenomics
        </a>

        <a href="/staking" className="btn-next">
          Next: Staking →
        </a>
      </div>
    </DocsLayout>
  );
}