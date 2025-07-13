import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  BsHouseFill,
  BsJournalText,
  BsCameraReelsFill,
  BsPersonRaisedHand,
  BsFillPatchQuestionFill
} from "react-icons/bs";
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <img src={logo} alt="VoliKu" style={styles.logoImage} />
        <span style={styles.logoText}>VoliKu</span>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <NavLink to="/" style={styles.link}>
            <BsHouseFill style={styles.icon} />
            Beranda
          </NavLink>
        </li>
        <li>
          <NavLink to="/modul" style={styles.link}>
            <BsJournalText style={styles.icon} />
            Modul
          </NavLink>
          </li>
        <li>
          <NavLink to="/video" style={styles.link}>
          <BsCameraReelsFill style={styles.icon} />
          Video
          </NavLink>
        </li>
        <li>
          <NavLink to="/simulasi" style={styles.link}>
          <BsPersonRaisedHand style={styles.icon} />
          Simulasi
          </NavLink>
          </li>
        <li>
          <NavLink to="/kuis" style={styles.link}>
          <BsFillPatchQuestionFill style={styles.icon} />
          Kuis
          </NavLink>
          </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#005f99',
    padding: '10px 30px',
    color: '#fff',
    fontFamily: 'Poppins,sans-serif',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  icon: {
    fontSize: '1.1rem',
    verticalAlign: 'middle'
  },
  logo: {
  display: 'flex',
  alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    objectFit: 'contain',
  },
  logoText: {
    marginLeft: '10px',
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#fff',
  }
};

export default Navbar;
