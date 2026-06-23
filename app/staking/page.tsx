import DocsLayout from "@/components/DocsLayout";

export default function StakingPage() {
  return (
    <DocsLayout current="Staking">
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

        .value {
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

      <div className="eyebrow">Staking</div>

      <h1 className="title">
        NG Token <br />
        <span>Staking System</span>
      </h1>

      <p className="lead">
        The NetGain Staking System is designed to reward long-term
        participation while supporting the sustainability and growth
        of the NetGain DAO ecosystem.
      </p>

      <div className="section">
        <h2>Membership Requirement</h2>

        <p>
          Participation in staking requires an active Membership NFT.
        </p>

        <p>
          The Membership NFT acts as the gateway to the NetGain
          ecosystem and determines the staking multiplier applied
          to each participant.
        </p>

        <p>
          Without an active Membership NFT, staking rewards are
          not available.
        </p>
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

      <div className="cards">
        <div className="card">
          <div className="value">365</div>
          <h3>Lock Days</h3>
          <p>
            Every staking position has its own independent
            365-day lock duration.
          </p>
        </div>

        <div className="card">
          <div className="value">28</div>
          <h3>Day Cycle</h3>
          <p>
            The staking system operates through recurring
            28-day reward cycles.
          </p>
        </div>

        <div className="card">
          <div className="value">10%</div>
          <h3>Claim Limit</h3>
          <p>
            Maximum claim amount allowed per cycle.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>Staking Lock Period</h2>

        <p>
          Each staking position has its own independent lock period.
        </p>

        <p>
          Every new staking action creates a separate staking
          position with its own lock timer.
        </p>

        <ul>
          <li>Standard Staking</li>
          <li>Buy & Stake</li>
          <li>Compound Rewards</li>
        </ul>

        <p>
          Each position unlocks independently after its own
          lock period has expired.
        </p>
      </div>

      <div className="section">
        <h2>Reward Cycles</h2>

        <p>
          The NetGain Staking System operates in recurring
          reward cycles of 28 days.
        </p>
      </div>

      <div className="section">
        <h2>Standard Staking</h2>

        <p>
          Members may deposit NG Tokens directly into the
          staking contract.
        </p>
      </div>

      <div className="section">
        <h2>Buy & Stake</h2>

        <p>
          Users may purchase NG Tokens using USDT and
          immediately stake them in a single transaction.
        </p>
      </div>

      <div className="section">
        <h2>Claim Rewards</h2>

        <p>
          Members may claim accumulated staking rewards
          according to the reward cycle mechanics.
        </p>
      </div>

      <div className="highlight">
        <h2>Claim Limits</h2>

        <p>
          Maximum Claim Per Cycle:
          <strong> 10% of Staked NG</strong>
        </p>

        <p>
          Example:
        </p>

        <p>
          Staked Amount: 100,000 NG
          <br />
          Maximum Claim Per Cycle: 10,000 NG
        </p>
      </div>

      <div className="section">
        <h2>Compound Rewards</h2>

        <p>
          Members may choose to compound rewards.
        </p>

        <p>
          Compounding automatically adds earned rewards
          back into staking, increasing future reward potential.
        </p>

        <p>
          Each compound action creates a new staking position
          with its own lock duration.
        </p>
      </div>

      <div className="section">
        <h2>Unstaking</h2>

        <p>
          Members may withdraw unlocked NG Tokens after the
          lock period has expired.
        </p>

        <p>
          Both partial and full withdrawals are supported.
        </p>
      </div>

      <div className="highlight">
        <h2>Instant Withdrawals After Unlock</h2>

        <p>
          Once a staking position has completed its
          365-day lock period, the unlocked NG Tokens
          become immediately available for withdrawal.
        </p>

        <ul>
          <li>Partial Unstake</li>
          <li>Full Unstake</li>
        </ul>

        <p>
          No additional waiting period applies after
          the lock duration has expired.
        </p>

        <p>
          Withdrawals are processed immediately through
          the staking smart contract.
        </p>
      </div>

      <div className="section">
        <h2>Unstake Fee</h2>

        <p>
          A 10% unstake fee applies when withdrawing
          staked NG Tokens.
        </p>
      </div>

      <div className="section">
        <h2>Treasury Integration</h2>

        <p>
          Effective staking weight may be used in
          treasury-related participation mechanisms
          and future ecosystem distributions.
        </p>
      </div>

      <div className="section">
        <h2>Why Staking?</h2>

        <ul>
          <li>Reward Long-Term Participation</li>
          <li>Encourage Ecosystem Growth</li>
          <li>Strengthen Community Alignment</li>
          <li>Support Treasury Participation</li>
          <li>Reduce Short-Term Speculation</li>
          <li>Create Sustainable Reward Structures</li>
        </ul>
      </div>

      <div className="contract">
        <h2>Smart Contract Reference</h2>

        <div className="contract-title">
          Staking Contract
        </div>

        <div className="contract-address">
          0x53B8c41A0C217F9eeBc61d58a621fFEE83eFD9C7
        </div>

        <a
          href="https://bscscan.com/address/0x53B8c41A0C217F9eeBc61d58a621fFEE83eFD9C7"
          target="_blank"
          rel="noopener noreferrer"
          className="contract-link"
        >
          View Contract on BscScan →
        </a>
      </div>

      <div className="nav">
        <a href="/membership" className="btn-prev">
          ← Membership NFTs
        </a>

        <a href="/treasury" className="btn-next">
          Next: Community-Owned Multi-Asset Treasury →
        </a>
      </div>
    </DocsLayout>
  );
}
