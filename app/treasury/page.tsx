import DocsLayout from "@/components/DocsLayout";

export default function TreasuryPage() {
  return (
    <DocsLayout current="Community-Owned Multi-Asset Treasury">
      <div style={{ maxWidth: "900px", color: "#fff" }}>
        <p
          style={{
            color: "#facc15",
            fontWeight: 900,
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          Treasury Architecture
        </p>

        <h1
          style={{
            marginTop: "20px",
            fontSize: "46px",
            fontWeight: 900,
            lineHeight: "1.1",
            color: "#fff",
          }}
        >
          Community-Owned <br />
          <span style={{ color: "#facc15" }}>Multi-Asset Treasury</span>
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "18px",
            lineHeight: "1.9",
            color: "#ffffff",
          }}
        >
          The NetGain Treasury is the core engine of the ecosystem. It is
          designed to accumulate, manage and deploy capital through transparent
          smart contracts and community governance.
        </p>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            marginTop: "40px",
          }}
        >
          {[
            {
              value: "70%",
              title: "Treasury",
              text: "Directed toward long-term treasury growth and future governance-approved opportunities.",
            },
            {
              value: "25%",
              title: "Marketing",
              text: "Used to grow the community, support expansion and reward ecosystem growth activity.",
            },
            {
              value: "5%",
              title: "Operations",
              text: "Supports operational needs, maintenance and basic ecosystem infrastructure.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(250,204,21,.20)",
                borderRadius: "20px",
                padding: "24px",
                background: "rgba(250,204,21,.045)",
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  fontSize: "42px",
                  fontWeight: 900,
                  marginBottom: "10px",
                }}
              >
                {item.value}
              </div>

              <h3 style={{ color: "#facc15", marginTop: 0 }}>{item.title}</h3>

              <p style={{ color: "#fff", lineHeight: "1.7" }}>{item.text}</p>
            </div>
          ))}
        </div>

        <section style={{ marginTop: "50px" }}>
          <h2 style={{ color: "#facc15" }}>What the Treasury Can Hold</h2>

          <p style={{ color: "#fff", lineHeight: "1.9" }}>
            NetGain DAO is not limited to a single asset. The treasury may hold
            stablecoins, Bitcoin, Solana and other high-quality digital assets.
            Future allocations may also include governance-approved
            opportunities.
          </p>

          <p style={{ color: "#fff", lineHeight: "1.9" }}>
            Bitcoin, Solana and stablecoins are examples, not limitations. The
            community may approve additional treasury strategies through
            governance as the ecosystem evolves.
          </p>
        </section>

        <div
          style={{
            marginTop: "40px",
            border: "1px solid rgba(250,204,21,.20)",
            borderRadius: "24px",
            padding: "30px",
            background: "rgba(250,204,21,.045)",
          }}
        >
          <h2 style={{ color: "#facc15", marginTop: 0 }}>
            Governance-Controlled Treasury
          </h2>

          <p style={{ color: "#fff", lineHeight: "1.8" }}>
            Treasury decisions are intended to be governed by the community.
            Liquidity allocations, asset purchases, token burns, treasury
            distributions and future investment opportunities may be submitted
            and voted on through NetGain DAO governance.
          </p>
        </div>

        <section style={{ marginTop: "50px" }}>
          <h2 style={{ color: "#facc15" }}>Why Treasury Matters</h2>

          <p style={{ color: "#fff", lineHeight: "1.9" }}>
            The treasury is not just a wallet. It is the foundation of NetGain
            DAO’s long-term strategy. It allows the ecosystem to accumulate
            assets, support future growth and create a transparent structure
            for community-driven capital management.
          </p>
        </section>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/treasury"
            style={{
              color: "#facc15",
              textDecoration: "none",
              border: "1px solid rgba(250,204,21,.25)",
              padding: "14px 18px",
              borderRadius: "14px",
              fontWeight: 900,
            }}
          >
            ← Treasury
          </a>

          <a
            href="/treasury-participation"
            style={{
              background: "#facc15",
              color: "#000",
              textDecoration: "none",
              padding: "14px 18px",
              borderRadius: "14px",
              fontWeight: 900,
            }}
          >
            Next: Treasury Participation  →
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}