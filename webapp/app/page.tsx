"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    label: "Cost per message",
    value: "₹0.20",
  },
  {
    label: "Media supported",
    value: "PDFs · Videos · Creative Posts",
  },
  {
    label: "Engagement boost",
    value: "Push buttons & branded DP",
  },
  {
    label: "Delivery speed",
    value: "Instant WhatsApp reach",
  },
];

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    const handleCanPlay = () => setIsReady(true);
    node.addEventListener("canplay", handleCanPlay);
    return () => node.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <main
      style={{
        width: "min(1200px, 100vw - 40px)",
        padding: "60px 20px 80px",
        display: "flex",
        flexDirection: "column",
        gap: "48px",
      }}
    >
      <header
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(124, 194, 255, 0.15)",
              color: "#7cc2ff",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            ✓ WhatsApp Bulk SMS
          </div>
          <h1
            style={{
              fontSize: "clamp(2.6rem, 5vw, 3.4rem)",
              marginTop: "20px",
              marginBottom: "18px",
              lineHeight: 1.1,
              fontWeight: 700,
            }}
          >
            Reach thousands on WhatsApp instantly.
          </h1>
          <p
            style={{
              color: "rgba(215, 229, 255, 0.85)",
              fontSize: "1.06rem",
              lineHeight: 1.6,
              maxWidth: "540px",
            }}
          >
            Showcase your service with rich media, push buttons, and branded
            display pictures. This 30-second promo highlights how to scale your
            outreach from a single dashboard.
          </p>
        </div>
        <section
          style={{
            display: "grid",
            gap: "16px",
            borderRadius: "20px",
            padding: "28px",
            background:
              "linear-gradient(145deg, rgba(16,42,82,0.7) 0%, rgba(18,60,110,0.7) 100%)",
            border: "1px solid rgba(124, 194, 255, 0.2)",
          }}
        >
          {stats.map((item) => (
            <article
              key={item.label}
              style={{
                display: "grid",
                gap: "6px",
                padding: "18px",
                borderRadius: "16px",
                background: "rgba(13, 27, 59, 0.55)",
                border: "1px solid rgba(124, 194, 255, 0.12)",
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(215, 229, 255, 0.55)",
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#f1f7ff",
                }}
              >
                {item.value}
              </span>
            </article>
          ))}
        </section>
      </header>

      <section
        style={{
          display: "grid",
          gap: "24px",
          background:
            "linear-gradient(160deg, rgba(12, 30, 66, 0.9) 0%, rgba(10, 26, 54, 0.85) 100%)",
          padding: "34px",
          borderRadius: "30px",
          border: "1px solid rgba(124, 194, 255, 0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2rem)",
              margin: 0,
              fontWeight: 700,
            }}
          >
            Watch the 30-second promo
          </h2>
          <span
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              border: "1px solid rgba(124, 194, 255, 0.35)",
              color: "rgba(215, 229, 255, 0.85)",
              fontSize: "0.95rem",
            }}
          >
            Contact: +91 8280527451
          </span>
        </div>
        <video
          ref={videoRef}
          controls
          poster="/media/video-thumb.jpg"
          style={{
            width: "100%",
            outline: "none",
            background:
              "radial-gradient(circle at center, rgba(15, 59, 115, 0.45) 0%, rgba(9, 21, 45, 0.9) 80%)",
          }}
        >
          <source src="/media/whatsapp-promo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            display: "grid",
            gap: "16px",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(15, 46, 96, 0.55)",
              border: "1px solid rgba(124, 194, 255, 0.15)",
            }}
          >
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
            >
              What you&apos;ll see
            </h3>
            <p
              style={{
                margin: 0,
                color: "rgba(215, 229, 255, 0.78)",
                lineHeight: 1.5,
              }}
            >
              Energetic pacing, smartphone animations, and motion graphics
              highlighting pricing, media support, and lightning-fast delivery.
            </p>
          </div>
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(15, 46, 96, 0.55)",
              border: "1px solid rgba(124, 194, 255, 0.15)",
            }}
          >
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
            >
              Usage ideas
            </h3>
            <p
              style={{
                margin: 0,
                color: "rgba(215, 229, 255, 0.78)",
                lineHeight: 1.5,
              }}
            >
              Embed in landing pages, ads, or presentations to pitch WhatsApp
              bulk messaging to teams that need high engagement.
            </p>
          </div>
          <div
            style={{
              padding: "18px 20px",
              borderRadius: "18px",
              background: "rgba(15, 46, 96, 0.55)",
              border: "1px solid rgba(124, 194, 255, 0.15)",
            }}
          >
            <h3
              style={{
                margin: "0 0 8px",
                fontSize: "1.05rem",
                fontWeight: 600,
              }}
            >
              Download
            </h3>
            <p
              style={{
                margin: 0,
                color: "rgba(215, 229, 255, 0.78)",
                lineHeight: 1.5,
              }}
            >
              Right-click the video to save the MP4, or use the download button
              in the player controls to share directly with your team.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            const node = videoRef.current;
            if (!node) return;
            if (node.paused) {
              void node.play();
            } else {
              node.currentTime = 0;
            }
          }}
          style={{
            alignSelf: "center",
            padding: "16px 34px",
            borderRadius: "999px",
            border: "none",
            fontSize: "1.05rem",
            fontWeight: 600,
            cursor: "pointer",
            background:
              "linear-gradient(120deg, rgba(33, 153, 255, 0.95), rgba(53, 197, 255, 0.95))",
            color: "#052450",
            boxShadow: "0 18px 40px rgba(32, 155, 255, 0.35)",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(event) => {
            event.currentTarget.style.transform = "translateY(-3px)";
            event.currentTarget.style.boxShadow =
              "0 24px 50px rgba(32, 155, 255, 0.45)";
          }}
          onMouseLeave={(event) => {
            event.currentTarget.style.transform = "translateY(0)";
            event.currentTarget.style.boxShadow =
              "0 18px 40px rgba(32, 155, 255, 0.35)";
          }}
        >
          {isReady ? "Replay Promo" : "Loading Video..."}
        </button>
      </section>
    </main>
  );
}
