import React, { useState } from 'react';
import introImage from '../assets/kuis-intro.png'; // sesuaikan path gambar intro

const questions = [
  {
    question: "Apa fungsi utama dari passing bawah dalam bola voli?",
    options: ["Melakukan servis", "Menerima bola dari lawan", "Melakukan smash", "Memblok bola"],
    answer: "Menerima bola dari lawan"
  },
  {
    question: "Berapa jumlah pemain inti dalam satu tim bola voli?",
    options: ["4", "5", "6", "7"],
    answer: "6"
  },
  {
    question: "Teknik dasar untuk memulai permainan disebut?",
    options: ["Passing", "Servis", "Smash", "Blocking"],
    answer: "Passing"
  },
  {
    question: "Apa saja jenis passing dalam bola voli?",
    options: ["Depan dan Bawah", "Belakang dan Atas", "Jongkok dan Memutar", "Atas dan Bawah"],
    answer: "Atas dan Bawah"
  },
  {
    question: "Manakah yang bertugas sebagai spesialis menerima bola/passing",
    options: ["Middle Blocker", "Libero", "Tosser", "Wasit"],
    answer: "Libero"
  }
];

const Kuis = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setStarted(false);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowResult(false);
  };

  if (!started) {
    return (
      <div style={styles.container}>
        <h2>Siap Main Voli? <br /><span >Yuk, Mulai Kuisnya! 🏐</span></h2>
        <img src={introImage} alt="Intro Kuis" style={styles.introImg} />
        <p>Buktikan kamu paham bola voli dengan jawab kuis singkat ini. Gaskeun!</p>
        <button onClick={() => setStarted(true)} style={styles.button}>Mulai Kuis</button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Kuis Bola Voli 📝</h2>

      {showResult ? (
        <div style={styles.result}>
          <h3>Skor Kamu: {score} / {questions.length}</h3>
          <p>{score === questions.length ? "Luar biasa! Kamu sangat paham." : "Ayo coba lagi untuk lebih paham!"}</p>
          <button onClick={restart} style={styles.button}>Ulangi Kuis</button>
        </div>
      ) : (
        <div>
          <h4>{questions[current].question}</h4>
          <ul style={styles.optionList}>
            {questions[current].options.map((opt, idx) => (
              <li key={idx}>
                <label>
                  <input
                    type="radio"
                    name="option"
                    value={opt}
                    checked={selected === opt}
                    onChange={() => setSelected(opt)}
                  />{" "}
                  {opt}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleAnswer} disabled={!selected} style={styles.button}>
            {current === questions.length - 1 ? "Selesai" : "Jawab"}
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '30px 20px',
    fontFamily: 'Poppins, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center'
  },
  welcomeCard: {
    background: '#fefefe',
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  highlight: {
    color: '#0077cc'
  },
  image: {
    width: '180px',
    margin: '20px 0'
  },
  button: {
    backgroundColor: '#0077cc',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '20px'
  },
  optionList: {
    listStyle: 'none',
    padding: 0,
    textAlign: 'left',
    marginTop: '20px'
  },
  optionItem: {
    marginBottom: '10px'
  },
  result: {
    textAlign: 'center',
    marginTop: '20px'
  }
};

export default Kuis;