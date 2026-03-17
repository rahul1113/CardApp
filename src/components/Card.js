import { useState, useRef } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Card() {
  const [accepted, setAccepted] = useState(false);
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({});
  const [darkMode, setDarkMode] = useState(true);

  const cardRef = useRef(null);

  const playSound = () => {
    const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    audio.play();
  };

  const handleYes = () => {
    confetti({ particleCount: 200, spread: 120 });
    playSound();
    setAccepted(true);
  };

  const handleNo = () => {
    setYesSize((prev) => prev + 0.2);

    const card = cardRef.current;
    if (!card) return;

    const width = card.offsetWidth;
    const height = card.offsetHeight;

    const x = Math.random() * (width - 100);
    const y = Math.random() * (height - 60);

    setNoPosition({ top: y, left: x });
  };

  return (
    <div
      style={{
        ...styles.container,
        background: darkMode
          ? "#121212"
          : "linear-gradient(135deg, #fceff9, #e0f7fa)",
      }}
    >
      {/* 🌙 Dark Mode Toggle */}
      <button onClick={() => setDarkMode(!darkMode)} style={styles.toggle}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      <motion.div
        ref={cardRef}
        drag={!accepted}
        dragConstraints={{ left: -100, right: 100, top: 0, bottom: 0 }}
        onDragEnd={(e, info) => {
          if (info.offset.x > 120) handleYes();
          if (info.offset.x < -120) handleNo();
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          ...styles.card,
          background: darkMode ? "#1e1e1e" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        {!accepted ? (
          <>
            <h2>Hey 😊</h2>
            <p>
              I really enjoy talking to you 💫 <br />
              Will you be my friend? 💖
            </p>

            <div style={styles.btnArea}>
              {/* YES (always centered) */}
              <button
                onClick={handleYes}
                style={{
                  ...styles.yesBtn,
                  transform: `scale(${yesSize})`,
                }}
              >
                Yes 💖
              </button>

              {/* NO (initially centered, then moves) */}
              <button
                onClick={handleNo}
                style={{
                  ...styles.noBtn,
                  position: "absolute",
                  top: noPosition.top !== undefined ? noPosition.top : "50%",
                  left: noPosition.left !== undefined ? noPosition.left : "50%",
                  transform:
                    noPosition.top !== undefined
                      ? "translate(0, 0)"
                      : "translate(-50%, -50%)",
                }}
              >
                No 🙈
              </button>
            </div>

            <p style={{ marginTop: 20, fontSize: 12 }}>
              👉 Swipe right for YES, left for NO
            </p>
          </>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={styles.success}
          >
            <h1>🎉 YEAHH! 💖</h1>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    position: "relative",
  },

  toggle: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: "8px 12px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
  },

  card: {
    width: "100%",
    maxWidth: "350px",
    minHeight: "320px",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    position: "relative",
    overflow: "hidden",
  },

  btnArea: {
    position: "relative",
    height: "120px",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  },

  yesBtn: {
    padding: "10px 20px",
    background: "#ff4d6d",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  noBtn: {
    padding: "10px 20px",
    background: "#ccc",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  success: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
};
