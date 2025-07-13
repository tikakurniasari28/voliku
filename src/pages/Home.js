import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import {
  BsJournalText,
  BsCameraReelsFill,
  BsPersonRaisedHand,
  BsFillPatchQuestionFill
} from 'react-icons/bs';


const Home = () => (
  <div className="home-container">
    <h1 className="home-title">Selamat Datang di VoliKu</h1>
    <p className="home-subtitle">
      Media pembelajaran bola voli interaktif untuk kamu yang ingin belajar lebih seru!
    </p>

      <div className="home-navGrid">
        <Link to="/modul" className="home-card">
          <BsJournalText style={{ marginRight: '8px' }} />
          Modul Teknik Dasar
        </Link>
                <Link to="/video" className="home-card">
          <BsCameraReelsFill style={{ marginRight: '8px' }} />
          Video Tutorial
        </Link>
        <Link to="/simulasi" className="home-card">
          <BsPersonRaisedHand style={{ marginRight: '8px' }} />
          Simulasi Strategi
        </Link>
        <Link to="/kuis" className="home-card">
          <BsFillPatchQuestionFill style={{ marginRight: '8px' }} />
          Kuis
        </Link>
      </div>
    </div>
  );

export default Home;

