import DocsLayout from "@/components/DocsLayout";

export default function IntroductionPage() {
  return (
    <DocsLayout current="Introduction">
      <div style={{ maxWidth: "900px", color: "#fff" }}>
        <p
          style={{
            color: "#facc15",
            fontWeight: 900,
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          Introduction
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
          Welcome to <br />
          <span style={{ color: "#facc15" }}>NetGain DAO</span>
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "18px",
            lineHeight: "1.9",
            color: "#ffffff",
          }}
        >
          NetGain DAO is a Community-Owned Multi-Asset Treasury built on
          transparency, governance, membership participation, staking and
          long-term treasury growth.
        </p>

        <div style={{ marginTop: "50px" }}>
          <h2 style={{ color: "#facc15" }}>Overview</h2>

          <p style={{ lineHeight: "1.9" }}>
            NetGain DAO combines Membership NFTs, NG Token staking,
            governance voting, treasury architecture and on-chain
            transparency into a single ecosystem designed to align
            participation with long-term ecosystem growth.
          </p>

          <p style={{ lineHeight: "1.9" }}>
            The project is built around the idea that a community working
            together can create opportunities, manage capital and build
            long-term value more effectively than isolated individuals.
          </p>

          <p style={{ lineHeight: "1.9" }}>
            Through transparent smart contracts and governance-driven
            decision-making, NetGain DAO aims to create a sustainable
            structure where treasury growth, community participation and
            ecosystem development are connected.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              border: "1px solid rgba(250,204,21,.20)",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <h3 style={{ color: "#facc15" }}>Transparency First</h3>
            <p>
              Smart contracts, treasury infrastructure and on-chain activity
              are designed to be publicly verifiable.
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(250,204,21,.20)",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <h3 style={{ color: "#facc15" }}>Community Ownership</h3>
            <p>
              NetGain DAO is designed around community participation and
              governance-based decision making.
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(250,204,21,.20)",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <h3 style={{ color: "#facc15" }}>Long-Term Growth</h3>
            <p>
              The ecosystem focuses on sustainable treasury expansion rather
              than short-term speculation.
            </p>
          </div>

          <div
            style={{
              border: "1px solid rgba(250,204,21,.20)",
              borderRadius: "20px",
              padding: "22px",
            }}
          >
            <h3 style={{ color: "#facc15" }}>On-Chain Verification</h3>
            <p>
              Treasury wallets, smart contracts and governance mechanisms
              remain publicly accessible.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            border: "1px solid rgba(250,204,21,.20)",
            borderRadius: "24px",
            padding: "30px",
          }}
        >
          <h2 style={{ color: "#facc15" }}>Core Principle</h2>

          <p>
            Building Wealth Together through a transparent,
            community-governed multi-asset treasury.
          </p>
        </div>

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
            href="/"
            style={{
              color: "#facc15",
              textDecoration: "none",
              border: "1px solid rgba(250,204,21,.25)",
              padding: "14px 18px",
              borderRadius: "14px",
            }}
          >
            ← Docs Home
          </a>

          <a
            href="/what-is-netgain"
            style={{
              background: "#facc15",
              color: "#000",
              textDecoration: "none",
              padding: "14px 18px",
              borderRadius: "14px",
              fontWeight: 900,
            }}
          >
            Next: What is NetGain DAO →
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}