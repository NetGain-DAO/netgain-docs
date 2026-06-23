import DocsLayout from "@/components/DocsLayout";

export default function TokenomicsPage() {
  return (
    <DocsLayout current="NG Token">
      <div style={{ maxWidth: "900px", color: "#fff" }}>
        <p
          style={{
            color: "#facc15",
            fontWeight: 900,
            letterSpacing: "5px",
            textTransform: "uppercase",
          }}
        >
          Tokenomics
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
          NG Token <br />
          <span style={{ color: "#facc15" }}>Tokenomics</span>
        </h1>

        <p
          style={{
            marginTop: "24px",
            fontSize: "18px",
            lineHeight: "1.9",
            color: "#ffffff",
          }}
        >
          NG is the native utility token of the NetGain DAO ecosystem. It is
          designed to support staking, governance participation, treasury
          interaction and future ecosystem utilities.
        </p>

        <div
          style={{
            marginTop: "40px",
            border: "1px solid rgba(250,204,21,.20)",
            borderRadius: "24px",
            padding: "30px",
            background: "rgba(250,204,21,.04)",
          }}
        >
          <h2 style={{ color: "#facc15", marginTop: 0 }}>
            Maximum Supply
          </h2>

          <div
            style={{
              fontSize: "48px",
              fontWeight: 900,
              color: "#facc15",
            }}
          >
            100,000,000 NG
          </div>

          <p style={{ lineHeight: "1.8" }}>
            The maximum supply of NG is permanently capped at
            100,000,000 tokens.
          </p>
        </div>

        <section style={{ marginTop: "50px" }}>
          <h2 style={{ color: "#facc15" }}>Token Allocation</h2>

          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                border: "1px solid rgba(250,204,21,.20)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  fontSize: "42px",
                  fontWeight: 900,
                }}
              >
                50%
              </div>

              <h3 style={{ color: "#facc15" }}>
                Reward Pool
              </h3>

              <p>
                50,000,000 NG allocated to staking rewards and ecosystem
                participation incentives.
              </p>
            </div>

            <div
              style={{
                border: "1px solid rgba(250,204,21,.20)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  fontSize: "42px",
                  fontWeight: 900,
                }}
              >
                40%
              </div>

              <h3 style={{ color: "#facc15" }}>
                NG Vault
              </h3>

              <p>
                40,000,000 NG allocated to the NG Vault and ecosystem growth
                mechanisms.
              </p>
            </div>

            <div
              style={{
                border: "1px solid rgba(250,204,21,.20)",
                borderRadius: "20px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  color: "#facc15",
                  fontSize: "42px",
                  fontWeight: 900,
                }}
              >
                10%
              </div>

              <h3 style={{ color: "#facc15" }}>
                Treasury Reserve
              </h3>

              <p>
                10,000,000 NG reserved for treasury-related strategic
                initiatives approved by governance.
              </p>
            </div>
          </div>
        </section>

        <section style={{ marginTop: "50px" }}>
          <h2 style={{ color: "#facc15" }}>
            Reward Pool
          </h2>

          <p style={{ lineHeight: "1.9" }}>
            The Reward Pool is designed to support long-term participation in
            the ecosystem through staking and governance-aligned incentives.
          </p>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#facc15" }}>
            NG Vault
          </h2>

          <p style={{ lineHeight: "1.9" }}>
            The NG Vault is intended to support ecosystem expansion,
            participation programs, strategic initiatives and future DAO
            growth opportunities.
          </p>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#facc15" }}>
            Treasury Reserve Flexibility
          </h2>

          <p style={{ lineHeight: "1.9" }}>
            The Treasury Reserve exists to support the long-term growth and
            sustainability of NetGain DAO.
          </p>

          <p style={{ lineHeight: "1.9" }}>
            Through governance, the community may decide to allocate a portion
            of the Treasury Reserve toward liquidity, strategic partnerships,
            exchange listings, ecosystem expansion, treasury operations or
            other approved initiatives.
          </p>

          <p style={{ lineHeight: "1.9" }}>
            Liquidity does not have a fixed allocation at launch. Any future
            liquidity allocation will be determined by governance and community
            consensus.
          </p>
        </section>

        <section style={{ marginTop: "40px" }}>
          <h2 style={{ color: "#facc15" }}>
            NG Token Utility
          </h2>

          <ul
            style={{
              lineHeight: "2",
              paddingLeft: "20px",
            }}
          >
            <li>Staking Participation</li>
            <li>Governance Voting</li>
            <li>Treasury Participation</li>
            <li>Ecosystem Utility</li>
            <li>Future DAO Integrations</li>
          </ul>
        </section>

        <div
          style={{
            marginTop: "50px",
            border: "1px solid rgba(250,204,21,.20)",
            borderRadius: "24px",
            padding: "30px",
            background: "rgba(250,204,21,.04)",
          }}
        >
          <h2 style={{ color: "#facc15", marginTop: 0 }}>
            Long-Term Sustainability
          </h2>

          <p style={{ lineHeight: "1.9" }}>
            NetGain DAO is designed around a fixed maximum supply, transparent
            allocation structure and governance-controlled treasury model.
          </p>

          <p style={{ lineHeight: "1.9" }}>
            No unlimited minting.
            <br />
            No hidden allocations.
            <br />
            Transparent on-chain supply.
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
            href="/membership"
            style={{
              background: "#facc15",
              color: "#000",
              textDecoration: "none",
              padding: "14px 18px",
              borderRadius: "14px",
              fontWeight: 900,
            }}
          >
            Next: Membership NFTs →
          </a>
        </div>
      </div>
    </DocsLayout>
  );
}