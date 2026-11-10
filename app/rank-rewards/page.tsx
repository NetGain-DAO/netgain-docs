import DocsLayout from "@/components/DocsLayout";

const RANK_REWARD_CONTRACT = "0x8A2A92dd5d0cB32B102b7763878e5C976480A1f5";

const ranks = Array.from({ length: 10 }, (_, index) => {
  const rank = index + 1;
  return {
    rank,
    directGold: rank * 3,
    buyStake: rank * 50,
    weight: `x${rank}`,
    maxReward: rank * 500,
  };
});

export default function RankRewardsPage() {
  return (
    <DocsLayout current="Rank Reward Pool">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }
        .title { margin-top:20px; font-size:46px; line-height:1.1; font-weight:900; color:#fff; }
        .title span { color:#facc15; }
        .lead { margin-top:24px; color:#fff; font-size:18px; line-height:1.9; max-width:850px; }
        .section { margin-top:50px; max-width:960px; }
        .section h2 { color:#facc15; margin-bottom:18px; font-size:28px; }
        .section h3 { color:#facc15; margin-bottom:10px; }
        .section p, .section li { color:#fff; line-height:1.9; }
        .section ul, .section ol { padding-left:24px; }
        .section li { margin-bottom:8px; }
        .highlight { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:30px; background:rgba(250,204,21,.04); max-width:960px; }
        .highlight h2 { margin-top:0; color:#facc15; }
        .highlight p { color:#fff; line-height:1.9; }
        .cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(190px,1fr)); gap:16px; margin-top:26px; }
        .info-card { border:1px solid rgba(250,204,21,.20); border-radius:22px; padding:24px; background:rgba(250,204,21,.04); }
        .info-card h3 { color:#facc15; font-size:28px; margin:0 0 8px; }
        .info-card p { color:#fff; line-height:1.6; margin:0; }
        .table-wrap { overflow-x:auto; border:1px solid rgba(250,204,21,.20); border-radius:20px; margin-top:24px; }
        .rank-table { width:100%; min-width:690px; border-collapse:collapse; text-align:left; }
        .rank-table thead { background:rgba(250,204,21,.12); }
        .rank-table th { color:#facc15; padding:16px 14px; font-size:13px; white-space:nowrap; }
        .rank-table td { color:#fff; padding:15px 14px; border-top:1px solid rgba(250,204,21,.13); font-size:14px; }
        .rank-table tbody tr:hover { background:rgba(250,204,21,.05); }
        .rank-name { color:#facc15 !important; font-weight:900; }
        .muted { color:#9ca3af !important; font-size:14px; }
        .formula { padding:22px; border-left:4px solid #facc15; border-radius:12px; background:rgba(250,204,21,.06); color:#fff; line-height:1.9; overflow-wrap:anywhere; }
        .address { color:#9ca3af; font-size:13px; word-break:break-all; line-height:1.6; margin:14px 0; }
        .contract-link { display:inline-block; text-decoration:none; color:#000; background:#facc15; padding:12px 16px; border-radius:12px; font-weight:900; }
        .contract-link:hover { opacity:.9; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
        @media (max-width:640px) {
          .title { font-size:34px; }
          .lead { font-size:16px; }
          .section h2 { font-size:24px; }
          .highlight { padding:22px; }
          .info-card { padding:20px; }
        }
      `}</style>

      <div className="eyebrow">NetGain Rank Rewards</div>

      <h1 className="title">
        Community Growth <br />
        <span>Rank Reward Pool</span>
      </h1>

      <p className="lead">
        The NetGain DAO Rank Reward Pool is an additional USDT reward system for
        qualifying Gold members who help grow the community through active
        direct Gold referrals and Buy &amp; Stake participation. Rewards are
        calculated from available pool funds and are never guaranteed.
      </p>

      <div className="highlight">
        <h2>Rewarding Measurable Community Growth</h2>
        <p>
          The Rank Reward Pool works alongside the existing 10-level marketing
          system. It uses eligible marketing rewards that could not be
          distributed through the regular referral structure. It does not
          require a new allocation from the community Treasury or additional NG
          token emissions.
        </p>
      </div>

      <div className="section">
        <h2>At a Glance</h2>
        <div className="cards">
          <div className="info-card"><h3>10</h3><p>Progressive reward ranks</p></div>
          <div className="info-card"><h3>Gold</h3><p>Active Membership NFT required</p></div>
          <div className="info-card"><h3>USDT</h3><p>Reward currency</p></div>
          <div className="info-card"><h3>x1–x10</h3><p>Rank-based reward weights</p></div>
        </div>
      </div>

      <div className="section">
        <h2>How the Pool Is Funded</h2>
        <p>
          NetGain DAO's established allocation structure remains unchanged:
          70% for Treasury, 25% for Marketing and 5% for Operations, where
          applicable. The marketing allocation includes the existing
          multi-level referral rewards.
        </p>
        <p>
          When an eligible marketing commission cannot be paid through the
          referral structure, that undistributed amount may be directed to the
          Rank Reward Pool according to the relevant smart contract rules.
          These funds support additional USDT rewards for qualified members.
        </p>
      </div>

      <div className="section">
        <h2>Who Can Qualify?</h2>
        <ul>
          <li>Hold an active <strong>Gold Membership NFT</strong>.</li>
          <li>Have the required number of <strong>direct referrals</strong> with active Gold memberships.</li>
          <li>Meet the applicable <strong>Buy &amp; Stake USDT volume</strong> requirement for the reward cycle.</li>
          <li>Meet all requirements for the rank when cycle eligibility is checked.</li>
        </ul>
        <p>
          Only directly referred Gold members count toward the direct Gold
          requirement. Indirect referrals do not count for this qualification.
          A member's eligible rank is limited by whichever requirement is not yet met.
        </p>
      </div>

      <div className="section">
        <h2>Rank Qualification &amp; Reward Limits</h2>
        <p>
          Each higher rank requires three additional active direct Gold
          referrals and another 50 USDT of qualifying Buy &amp; Stake volume.
          Reward weight and maximum reward limit rise with the rank.
        </p>
        <div className="table-wrap">
          <table className="rank-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Direct Gold</th>
                <th>Buy &amp; Stake</th>
                <th>Weight</th>
                <th>Max Reward</th>
              </tr>
            </thead>
            <tbody>
              {ranks.map(({ rank, directGold, buyStake, weight, maxReward }) => (
                <tr key={rank}>
                  <td className="rank-name">Rank {rank}</td>
                  <td>{directGold}</td>
                  <td>{buyStake} USDT</td>
                  <td>{weight}</td>
                  <td>{maxReward.toLocaleString("en-US")} USDT</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted">
          Max Reward is a per-cycle ceiling, not a promised payment. Actual
          rewards may be lower or zero and depend on the funded pool and
          qualified participation.
        </p>
      </div>

      <div className="section">
        <h2>How Rewards Are Calculated</h2>
        <p>
          After a cycle closes and eligible members have been evaluated, the
          available USDT pool is shared proportionally using each qualified
          member's rank weight, subject to the maximum reward for that rank.
        </p>
        <div className="formula">
          <strong>Calculated Reward</strong> = Available Cycle Pool × Member's Rank Weight
          ÷ Total Weight of All Qualified Members
          <br />
          <strong>Final Reward</strong> = the lower of the calculated reward and
          the rank's maximum reward limit.
        </div>
        <p>
          For example, if the available pool is 900 USDT and two qualifying
          members have weights x1 and x2, their uncapped shares are 300 USDT
          and 600 USDT. This is an illustration, not a forecast.
        </p>
        <p>
          Funds remaining because of reward caps or rounding can carry forward
          to another cycle under the contract rules.
        </p>
      </div>

      <div className="section">
        <h2>Reward Cycles &amp; Claiming</h2>
        <ol>
          <li>Marketing activity contributes eligible undistributed USDT to the pool.</li>
          <li>The reward cycle closes and member qualifications are checked.</li>
          <li>Reward calculations are finalized based on actual available funds.</li>
          <li>Qualified members can view and claim their USDT rewards through the supported interface.</li>
        </ol>
        <p>
          Reward distribution is generally targeted for the first week of each
          month, following completion of the relevant cycle processing.
          Actual claim availability depends on successful cycle finalization;
          it is not an automatic fixed-date payment.
        </p>
        <p>
          The claim window begins after cycle finalization and is governed by
          the active smart contract configuration. Members must claim before
          the applicable on-chain deadline. Unclaimed rewards after the
          window closes are carried forward under the contract rules.
        </p>
      </div>

      <div className="section">
        <h2>Important Clarifications</h2>
        <ul>
          <li>Rank Reward Pool is separate from NG staking rewards.</li>
          <li>Rewards are paid in USDT, not newly issued NG tokens.</li>
          <li>Buying Gold membership alone does not qualify a member.</li>
          <li>Direct Gold referrals and Buy &amp; Stake requirements must also be met.</li>
          <li>Rank levels do not guarantee a fixed reward or investment return.</li>
          <li>The final on-chain contract state governs eligibility, rewards and deadlines.</li>
        </ul>
      </div>

      <div className="section">
        <h2>Smart Contract Reference</h2>
        <div className="info-card">
          <h3 style={{ fontSize: 20 }}>NetGain Rank Reward Pool</h3>
          <p>BNB Smart Chain · USDT reward distribution</p>
          <div className="address">{RANK_REWARD_CONTRACT}</div>
          <a
            href={`https://bscscan.com/address/${RANK_REWARD_CONTRACT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contract-link"
          >
            View Contract on BscScan →
          </a>
        </div>
      </div>

      <div className="nav">
        <a href="/marketing-rewards" className="btn-prev">
          ← Marketing Rewards
        </a>
        <a href="/governance" className="btn-next">
          Next: Governance →
        </a>
      </div>
    </DocsLayout>
  );
}
