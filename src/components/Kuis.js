import React, { useState } from "react";
import introImage from "../assets/kuis-intro.png";

/* ---------- DATA SOAL PER TOPIK ---------- */
const quizTopics = {
  dasar: [
    {
      question: "Apa fungsi utama dari passing bawah dalam bola voli?",
      options: [
        "Melakukan servis",
        "Menerima bola dari lawan",
        "Melakukan smash",
        "Memblok bola",
      ],
      answer: "Menerima bola dari lawan",
    },
    {
      question: "Teknik dasar untuk memulai permainan disebut?",
      options: ["Passing", "Servis", "Smash", "Blocking"],
      answer: "Passing",
    },
    {
      question: "Permulaan permainan bola voli diawali dengan dilakukannya?",
      options: ["Passing", "Servis", "Smash", "Blocking"],
      answer: "Servis",
    },
    {
      question: "Menahan bola dengan dua tangan dari arah bawah disebut?",
      options: ["Passing", "Servis", "Smash", "Block"],
      answer: "Passing",
    },
  ],
  peraturan: [
    {
      question: "Berapa jumlah pemain inti dalam satu tim bola voli?",
      options: ["4", "5", "6", "7"],
      answer: "6",
    },
    {
      question: "Nilai permainan bola voli berakhir bila satu tim memperoleh?",
      options: ["18", "12", "22", "25"],
      answer: "25",
    },
    {
      question: "Tinggi net bola voli untuk putra adalah?",
      options: ["2,24 meter", "2,38 meter", "2,43 meter", "2,50 meter"],
      answer: "2,43 meter",
    },
    {
      question: "Ukuran lapangan bola voli adalah?",
      options: ["9 m x 18 m", "8 m x 16 m", "10 m x 20 m", "9 m x 20 m"],
      answer: "9 m x 18 m",
    },
    {
      question: "Tinggi net bola voli untuk putri adalah?",
      options: ["2,24 meter", "2,38 meter", "2,43 meter", "2,50 meter"],
      answer: "2,24 meter",
    },
    {
      question: "Sistem perhitungan skor dalam bola voli yang digunakan saat ini adalah?",
      options: ["Point system", "Rally point system", "Deuce system", "Time system"],
      answer: "Rally point system",
    },
    {
      question: "Jumlah maksimal sentuhan dalam satu tim sebelum bola melewati net adalah?",
      options: ["2 kali", "3 kali", "4 kali", "5 kali"],
      answer: "9 m x 18 m",
    },
    {
      question: " Jika bola menyentuh garis lapangan maka bola dinyatakan?",
      options: ["Out", "Masuk", "Fault", "Replay"],
      answer: "Masuk",
    },
    {
      question: "Jika terjadi deuce di angka 24-24, maka permainan dilanjutkan hingga?",
      options: ["Satu tim unggul 2 poin", "Satu tim mencapai 26", "Satu tim mencapai 30", "Satu tim mencapai 28"],
      answer: "Satu tim unggul 2 poin",
    },
    {
      question: "Pemain tidak diperbolehkan menyentuh net dengan?",
      options: ["Tangan", "Kaki", "Seluruh anggota badan", "Kepala saja"],
      answer: "Seluruh anggota badan",
    },
  ],
  sejarah: [
    {
      question: "Siapakah yang menciptakan permainan bola voli?",
      options: [
        "William C. Morgan",
        "Halsted Sringfield",
        "George J. Fisher",
        "W. J. Latumeten",
      ],
      answer: "William C. Morgan",
    },
    {
      question: "Permainan bola voli pertama kali diperkenalkan pada tahun?",
      options: ["1891", "1895", "1900", "1910"],
      answer: "1895",
    },
    {
      question: "Permainan bola voli berasal dari negara?",
      options: ["Kanada", "Inggris", "Amerika Serikat", "Brasil"],
      answer: "Amerika Serikat",
    },
    {
      question: "Permainan bola voli awalnya disebut dengan nama?",
      options: ["Mintonette", "Volleyball", "Softball", "Badmintonette"],
      answer: "Mintonette",
    },
    {
      question: "William G. Morgan adalah seorang instruktur di?",
      options: ["YMCA", "YWCA", "NBA", "FIFA"],
      answer: "YMCA",
    },
    {
      question: "Bola voli pertama kali diciptakan di kota?",
      options: ["Springfield", "Massachusetts", "Holyoke", "New York"],
      answer: "Holyoke",
    },
    {
      question: "Organisasi bola voli dunia adalah?",
      options: ["FIBA", "FIFA", "FIVB", "IBF"],
      answer: "FIVB",
    },
    {
      question: "FIVB (Federation Internationale de Volleyball) berdiri pada tahun?",
      options: ["1945", "1947", "1949", "1950"],
      answer: "1947",
    },
    {
      question: "Kejuaraan dunia bola voli pertama kali diadakan pada tahun?",
      options: ["1945", "1947", "1949", "1950"],
      answer: "1949",
    },
    {
      question: "Indonesia mengenal bola voli dibawa oleh?",
      options: ["Guru olahraga", "Tentara Belanda", "Pelaut Cina", "Bangsa Jepang"],
      answer: "Tentara Belanda",
    },
  ],
};

export default function Kuis() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const resetAll = () => {
    setSelectedTopic(null);
    setQuestions([]);
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  /* ---------- 1. PILIH TOPIK ---------- */
  if (!started && !selectedTopic) {
    return (
      <div style={st.container}>
        <h2>Pilih Topik Kuis Voli 🏐</h2>
        <p style={st.subtitle}>Klik salah satu topik di bawah ini:</p>

        <button
          onClick={() => {
            setSelectedTopic("Kuis Dasar");
            setQuestions(quizTopics.dasar);
          }}
          style={st.btn}
        >
          Kuis Dasar Bola Voli
        </button>
        <br /><br />

        <button
          onClick={() => {
            setSelectedTopic("Kuis Peraturan Bola Voli");
            setQuestions(quizTopics.peraturan);
          }}
          style={st.btn}
        >
          Kuis Peraturan Bola Voli
        </button>
        <br /><br />

        <button
          onClick={() => {
            setSelectedTopic("Kuis Sejarah Bola Voli");
            setQuestions(quizTopics.sejarah);
          }}
          style={st.btn}
        >
          Kuis Sejarah Bola Voli
        </button>
      </div>
    );
  }

  /* ---------- 2. LAYAR INTRO SETELAH PILIH TOPIK ---------- */
  if (!started && selectedTopic) {
    return (
      <div style={st.container}>
        <h2>
          Topik: <span style={st.blue}>{selectedTopic.toUpperCase()}</span>
        </h2>
        <img src={introImage} alt="Volleyball intro" style={st.hero} />
        <p style={st.subtitle}>
          Kamu akan mengerjakan kuis seputar topik <b>{selectedTopic}</b>.
        </p>
        <button onClick={() => setStarted(true)} style={st.btn}>
          Mulai Kuis
        </button>
      </div>
    );
  }

  /* ---------- 3. LAYAR KUIS / HASIL ---------- */
  return (
    <div style={st.container}>
      <h2 style={{ marginBottom: 10 }}>Kuis Bola Voli 📝</h2>

      {showResult ? (
        <div style={st.resultBox}>
          <h3>
            Skor Kamu: {score} / {questions.length}
          </h3>
          <p>
            {score === questions.length
              ? "Luar biasa! Kamu sangat paham."
              : "Ayo coba lagi untuk lebih paham!"}
          </p>
          <button onClick={resetAll} style={st.btn}>
            Ulangi Kuis
          </button>
        </div>
      ) : (
        <>
          <h4 style={{ fontSize: 20, marginBottom: 20 }}>{questions[current].question}</h4>
          <ul style={st.ul}>
            {questions[current].options.map((opt) => (
              <li key={opt} style={st.li}>
                <label style={st.label}>
                  <input
                    type="radio"
                    name="option"
                    value={opt}
                    checked={selected === opt}
                    onChange={() => setSelected(opt)}
                    style={st.radio}
                  />
                  {opt}
                </label>
              </li>
            ))}
          </ul>

          <button
            onClick={handleAnswer}
            style={{
              ...st.btn,
              opacity: selected ? 1 : 0.6,
              cursor: selected ? "pointer" : "not-allowed",
            }}
            disabled={!selected}
          >
            {current === questions.length - 1 ? "Selesai" : "Jawab"}
          </button>
        </>
      )}
    </div>
  );
}

/* ---------- GAYA ---------- */
const st = {
  container: {
  marginTop: 100,
  padding: "32px 24px",
  fontFamily: "Poppins, sans-serif",
  maxWidth: 720, // diperbesar dari 620
  margin: "0 auto",
  textAlign: "center",
  background: "#fff", 
  borderRadius: 12,
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  blue: { color: "#0077cc" },
  hero: { width: "70%", maxWidth: 260, margin: "20px auto" },
  subtitle: { maxWidth: 400, margin: "0 auto 24px" },
  btn: {
    background: "#0077cc",
    color: "#fff",
    padding: "10px 22px",
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
  },
  ul: { listStyle: "none", padding: 0, marginTop: 20, textAlign: "left" },
  li: { marginBottom: 16 },
  label: {
  display: "flex",
  alignItems: "center",
  gap: 12, 
  fontSize: 16, 
  cursor: "pointer",
  },

  radio: { cursor: "pointer" },
  resultBox: { marginTop: 24 },
};
