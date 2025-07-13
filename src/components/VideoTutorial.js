import React from 'react';

const videoList = [
  {
    level: 'Pemula',
    title: 'Teknik Dasar Passing Bawah dan Atas untuk Pemula',
    url: 'https://youtu.be/V8sDptPxdV0'
  },
  {
    level: 'Pemula',
    title: 'Teknik Dasar Servis Atas dan Bawah untuk Pemula',
    url: 'https://youtu.be/RfvRMWFcdUs?si=nIZt3JyKFeFlTRsb'
  },
  {
    level: 'Lanjutan',
    title: 'Strategi Permainan Bola Voli Tingkat Lanjut',
    url: 'https://youtu.be/59sNjtz--U8?si=fg2ekTpImAnNUulp'
  }
];

const VideoTutorial = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Video Tutorial Bola Voli</h2>
      <div style={styles.videoGrid}>
        {videoList.map((video, idx) => (
          <div key={idx} style={styles.card}>
            <h3>{video.level} – {video.title}</h3>
            <a href={video.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              🎬 Tonton Video
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center'
  },
  title: {
    fontSize: '2rem',
    marginBottom: '30px'
  },
  videoGrid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    maxWidth: '1000px',
    margin: '0 auto'
  },
  card: {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 16px',
    backgroundColor: '#ff0000',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
};

export default VideoTutorial;
