import React from 'react';
import servis from '../assets/servis.jpg';
import block from '../assets/block.jpg';
import smash from '../assets/smash.jpg';
import passing from '../assets/passing.png';
import bawah from '../assets/bawah.png';
import atas from '../assets/atas.jpg';

const modulData = [
  {
    title: 'Servis Atas',
        image: servis,
    desc: ' Servis Atas merupakan teknik dasar memukul bola yang dilakukan dengan cara melempar bola ke atas, kemudian memukulnya dengan telapak tangan di atas kepala, dengan tujuan agar bola melewati net dan masuk ke area permainan lawan.'
  },
  {
    title: 'Servis Bawah',
        image: bawah,
    desc: 'Servis bawah dalam bola voli adalah teknik dasar untuk memulai permainan dengan memukul bola ke arah lapangan lawan dari bawah. Teknik ini tergolong mudah untuk dipelajari dan sering digunakan oleh pemula atau pemain wanita'
  },
  {
    title: 'Passing Bawah',
    image: passing,
    desc: 'Passing bawah adalah teknik dasar dalam permainan bola voli yang digunakan untuk menerima bola dari servis lawan atau bola rendah, dengan mengarahkan bola menggunakan lengan bawah.'
  },
  {
    title: 'Passing Atas',
    image: atas,
    desc: 'Passing atas dalam bola voli adalah teknik mengoper atau mengumpan bola ke pemain lain dengan menggunakan kedua tangan yang diangkat di atas kepala.'
  },
  {
    title: 'Smash',
    image: smash,
    desc: 'Smash adalah pukulan keras yang dilakukan ke arah lawan dengan tujuan mencetak poin.'
  },
  {
    title: 'Block',
    image: block,
    desc: 'Block adalah usaha menghadang serangan lawan (smash) di dekat net agar bola tidak melewati area sendiri.'
  }
];

const ModulTeknik = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Modul Teknik Dasar Bola Voli</h2>
      <div style={styles.grid}>
        {modulData.map((item, index) => (
          <div key={index} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <h3>{item.title}</h3>
            <p style={styles.paragraph}>{item.desc}</p>

          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px'
  },
  grid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    textAlign: 'center'  // ⬅️ untuk judul
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '10px'
  },
  paragraph: {
    textAlign: 'justify'  // ⬅️ deskripsi
  }
};

export default ModulTeknik;
