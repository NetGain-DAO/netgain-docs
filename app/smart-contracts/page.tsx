import DocsLayout from "@/components/DocsLayout";

const coreContracts = [
  ["NG Token", "0x25f3424E59D276fFba3AF0f63E8F3aa47C196B60", "Ecosystem token"],
  ["Membership NFT", "0x85443fF1818d76E64E755901EA33b6bDEB315495", "Membership access and NFT management"],
  ["Staking", "0x53B8c41A0C217F9eeBc61d58a621fFEE83eFD9C7", "Staking, rewards, claim, compound and unstake"],
  ["Treasury", "0xE8C736EF72F0F7519C3fA8B14a9713498a7f02aA", "Community-owned treasury infrastructure"],
  ["Governance", "0x4b5242fEFC1301Bb155acd9EAF00265C1A27E820", "DAO proposal and voting system"],
  ["Executor", "0xD2BBD6B3DAcE1D1a747A623193c1124E5086E148", "Governance proposal execution"],
  ["Registry", "0xC8D3c9B33311557FAC80306F9b229A1934435Cba", "Central contract address registry"],
];

const economicContracts = [
  ["NG Vault", "0x573Ff7c42E4f228C89A2890bA26f7c74E3F32E17", "NG Vault allocation"],
  ["Staking Reward Pool", "0x7C5b1e8699b0FfE0A2f7F27F42beDD9692c52aB2", "Staking reward distribution pool"],
  ["Recycling", "0x0b6c143Bb463D941b6Ea9847243aECE6E0787e88", "Reward and fee recycling system"],
  ["NFT Marketing", "0xf5116d973f5aC85e11aC0d3fD4bB029Bf789eD90", "Membership NFT marketing rewards"],
  ["Buy & Stake Marketing", "0xA9e7f652932f67EE885604D9ac5Cc8B75F5CCB9A", "Buy & Stake marketing rewards"],
];

const utilityContracts = [
  ["Reader", "0xE1e4006C7df2E892083367c4ec761e7c59Ea6Cb0", "Read-only dashboard data helper"],
];

function ContractCard({
  name,
  address,
  description,
}: {
  name: string;
  address: string;
  description: string;
}) {
  return (
    <div className="contract-card">
      <h3>{name}</h3>
      <p>{description}</p>

      <div className="address">{address}</div>

      <a
        href={`https://bscscan.com/address/${address}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contract-link"
      >
        View Contract on BscScan →
      </a>
    </div>
  );
}

export default function SmartContractsPage() {
  return (
    <DocsLayout current="NetGain Smart Contracts">
      <style>{`
        .eyebrow { color:#facc15; font-size:12px; font-weight:900; letter-spacing:5px; text-transform:uppercase; }
        .title { margin-top:20px; font-size:46px; line-height:1.1; font-weight:900; color:#fff; }
        .title span { color:#facc15; }
        .lead { margin-top:24px; color:#fff; font-size:18px; line-height:1.9; max-width:850px; }
        .section { margin-top:50px; max-width:960px; }
        .section h2 { color:#facc15; margin-bottom:18px; font-size:28px; }
        .section p, .section li { color:#fff; line-height:1.9; }
        .contracts { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:16px; margin-top:28px; }
        .contract-card { border:1px solid rgba(250,204,21,.20); border-radius:22px; padding:24px; background:rgba(250,204,21,.04); }
        .contract-card h3 { color:#facc15; margin-top:0; }
        .address { color:#9ca3af; font-size:13px; word-break:break-all; line-height:1.6; margin:14px 0; }
        .contract-link { display:inline-block; text-decoration:none; color:#000; background:#facc15; padding:12px 16px; border-radius:12px; font-weight:900; }
        .contract-link:hover { opacity:.9; }
        .highlight { margin-top:50px; border:1px solid rgba(250,204,21,.20); border-radius:24px; padding:30px; background:rgba(250,204,21,.04); }
        .highlight h2 { margin-top:0; color:#facc15; }
        .nav { margin-top:50px; display:flex; justify-content:space-between; gap:12px; flex-wrap:wrap; }
        .btn-prev, .btn-next { text-decoration:none; padding:14px 18px; border-radius:14px; font-weight:900; }
        .btn-prev { color:#facc15; border:1px solid rgba(250,204,21,.25); }
        .btn-next { background:#facc15; color:#000; }
      `}</style>

      <div className="eyebrow">NetGain Smart Contracts</div>

      <h1 className="title">
        Transparent <br />
        <span>Smart Contract Architecture</span>
      </h1>

      <p className="lead">
        NetGain DAO is built around a transparent smart contract architecture.
        Each core function of the ecosystem is handled by dedicated on-chain
        contracts that can be publicly viewed and verified on BscScan.
      </p>

      <div className="highlight">
        <h2>Transparent by Design</h2>
        <p>
          NetGain DAO uses dedicated smart contracts for token management,
          membership access, staking, treasury infrastructure, governance,
          rewards, marketing, registry management and dashboard reading tools.
        </p>
      </div>

      <div className="section">
        <h2>Core Contracts</h2>
        <div className="contracts">
          {coreContracts.map(([name, address, description]) => (
            <ContractCard
              key={address}
              name={name}
              address={address}
              description={description}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Economic & Reward Contracts</h2>
        <div className="contracts">
          {economicContracts.map(([name, address, description]) => (
            <ContractCard
              key={address}
              name={name}
              address={address}
              description={description}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Utility Contracts</h2>
        <div className="contracts">
          {utilityContracts.map(([name, address, description]) => (
            <ContractCard
              key={address}
              name={name}
              address={address}
              description={description}
            />
          ))}
        </div>
      </div>

      <div className="section">
        <h2>Why This Matters</h2>
        <ul>
          <li>Contracts are publicly accessible on-chain.</li>
          <li>Users can verify contract addresses independently.</li>
          <li>Core ecosystem operations are separated into dedicated contracts.</li>
          <li>The Registry helps organize contract addresses across the ecosystem.</li>
          <li>Transparency supports trust, accountability and long-term credibility.</li>
        </ul>
      </div>

      <div className="nav">
        <a href="/problems-solutions" className="btn-prev">
          ← Problems & Solutions
        </a>

        <a href="/tokenomics" className="btn-next">
          Next: NG Token →
        </a>
      </div>
    </DocsLayout>
  );
}