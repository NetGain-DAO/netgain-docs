import DocsLayout from "@/components/DocsLayout";

export default function WhatIsNetGainPage() {
  return (
    <DocsLayout current="About NetGain DAO">
      <div style={{ color: "#fff", maxWidth: "900px" }}>
        <p style={{ color: "#facc15", fontWeight: 900, letterSpacing: "5px", textTransform: "uppercase" }}>
          Chapter 1
        </p>

        <h1 style={{ fontSize: "46px", lineHeight: "1.12", fontWeight: 950, marginTop: "20px" }}>
          What is <br />
          <span style={{ color: "#facc15" }}>NetGain DAO?</span>
        </h1>

        <p style={{ marginTop: "24px", color: "#fff", fontSize: "17px", lineHeight: "1.85" }}>
          NetGain DAO is a Community-Owned Multi-Asset Treasury designed to combine governance,
          treasury growth, staking rewards, membership participation, and transparent on-chain
          operations within a single ecosystem.
        </p>

        <section style={{ marginTop: "42px" }}>
          <h2 style={{ color: "#facc15", fontSize: "28px" }}>Overview</h2>
          <p style={{ color: "#fff", lineHeight: "1.85" }}>
            Unlike many crypto projects that depend mainly on short-term hype or speculation,
            NetGain DAO is designed around long-term treasury accumulation, transparent governance,
            and community participation.
          </p>
          <p style={{ color: "#fff", lineHeight: "1.85" }}>
            The ecosystem connects Membership NFTs, NG Token staking, treasury architecture,
            marketing rewards, and governance into a single structure where participation and
            ecosystem growth are aligned.
          </p>
        </section>

        <div style={{ marginTop: "34px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
          {["Membership NFTs", "NG Token", "Staking System", "Governance"].map((title) => (
            <div key={title} style={{ border: "1px solid rgba(250,204,21,.18)", borderRadius: "22px", padding: "24px", background: "rgba(250,204,21,.06)" }}>
              <h3 style={{ margin: 0, color: "#facc15" }}>{title}</h3>
              <p style={{ color: "#fff", lineHeight: "1.65" }}>
                {title === "Membership NFTs" && "Membership NFTs provide access to NetGain DAO and activate participation in staking, governance, and treasury-related opportunities."}
                {title === "NG Token" && "NG is the ecosystem token used within staking, Buy & Stake, governance participation, and NetGain's internal economic model."}
                {title === "Staking System" && "Members can stake NG Tokens and participate in reward mechanisms designed to support long-term participation."}
                {title === "Governance" && "Governance allows the community to guide treasury decisions, liquidity proposals, burn proposals, and future investment opportunities."}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "44px", border: "1px solid rgba(250,204,21,.22)", borderRadius: "26px", padding: "30px", background: "rgba(250,204,21,.06)" }}>
          <h2 style={{ margin: 0, color: "#facc15" }}>Community-Owned Multi-Asset Treasury</h2>
          <p style={{ color: "#fff", lineHeight: "1.75" }}>
            The NetGain Treasury may hold Bitcoin, Solana, stablecoins, and future
            governance-approved opportunities. These examples are not limitations, but
            illustrations of a diversified treasury strategy controlled by community governance.
          </p>
        </div>

        <div style={{ marginTop: "42px", display: "flex", justifyContent: "space-between", gap: "14px", flexWrap: "wrap" }}>
          <a href="/introduction" style={{ color: "#facc15", border: "1px solid rgba(250,204,21,.25)", padding: "14px 18px", borderRadius: "14px", textDecoration: "none", fontWeight: 900 }}>
            ← Introduction
          </a>

          <a href="/problems-solutions" style={{ color: "#000", background: "#facc15", padding: "14px 18px", borderRadius: "14px", textDecoration: "none", fontWeight: 900 }}>
            Next: Problems & Solutions →
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}