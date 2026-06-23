import DocsLayout from "@/components/DocsLayout";

export default function Home() {
  const cards = [
    {
      title: "Introduction",
      href: "/introduction",
      text: "Start with the vision, mission, and foundation of NetGain DAO.",
    },
    {
      title: "What is NetGain DAO?",
      href: "/what-is-netgain",
      text: "Understand the ecosystem, membership, treasury, staking, and governance model.",
    },
    {
      title: "Treasury Architecture",
      href: "/treasury",
      text: "Explore the Community-Owned Multi-Asset Treasury and revenue allocation model.",
    },
    {
      title: "Tokenomics",
      href: "/tokenomics",
      text: "Review NG supply, allocation, reward pool, NG Vault, and treasury reserve.",
    },
  ];

  return (
    <DocsLayout current="About NetGain DAO">
      <div style={{ maxWidth: "960px", color: "#fff" }}>
        <p
          style={{
            color: "#facc15",
            fontWeight: 900,
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          NetGain DAO Documentation
        </p>

        <h1
          style={{
            marginTop: "20px",
            fontSize: "48px",
            lineHeight: "1.1",
            fontWeight: 900,
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
            color: "#fff",
            maxWidth: "850px",
          }}
        >
          Official documentation for NetGain DAO, including treasury
          architecture, Membership NFTs, NG Token, staking, governance,
          tokenomics, smart contracts, transparency, and risk disclosures.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "28px",
          }}
        >
          {[
            "On-Chain Transparency",
            "DAO Governance",
            "Multi-Asset Treasury",
            "BNB Smart Chain",
          ].map((item) => (
            <span
              key={item}
              style={{
                border: "1px solid rgba(250,204,21,.25)",
                color: "#facc15",
                borderRadius: "999px",
                padding: "10px 14px",
                fontSize: "13px",
                fontWeight: 800,
                background: "rgba(250,204,21,.045)",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <div
          style={{
            marginTop: "42px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "16px",
          }}
        >
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              style={{
                color: "#fff",
                textDecoration: "none",
                border: "1px solid rgba(250,204,21,.20)",
                borderRadius: "22px",
                padding: "24px",
                background: "rgba(250,204,21,.045)",
              }}
            >
              <h3
                style={{
                  color: "#facc15",
                  marginTop: 0,
                  marginBottom: "12px",
                  fontSize: "20px",
                }}
              >
                {card.title}
              </h3>

              <p
                style={{
                  color: "#fff",
                  lineHeight: "1.75",
                  margin: 0,
                }}
              >
                {card.text}
              </p>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: "44px",
            border: "1px solid rgba(250,204,21,.20)",
            borderRadius: "24px",
            padding: "30px",
            background: "rgba(250,204,21,.035)",
          }}
        >
          <h2 style={{ color: "#facc15", marginTop: 0 }}>
            Transparent by Design
          </h2>

          <p style={{ color: "#fff", lineHeight: "1.85", marginBottom: 0 }}>
            NetGain DAO is designed around transparency and verifiability.
            Smart contracts, treasury infrastructure, governance mechanisms,
            and on-chain activity are intended to be publicly accessible and
            independently verifiable.
          </p>
        </div>

        <div style={{ marginTop: "42px" }}>
          <a
            href="/introduction"
            style={{
              display: "inline-block",
              background: "#facc15",
              color: "#000",
              textDecoration: "none",
              padding: "15px 20px",
              borderRadius: "14px",
              fontWeight: 900,
            }}
          >
            Start Reading →
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}