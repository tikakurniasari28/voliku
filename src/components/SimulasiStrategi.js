import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialPlayers = [
  { id: '1', name: 'P1' },
  { id: '2', name: 'P2' },
  { id: '3', name: 'P3' },
  { id: '4', name: 'P4' },
  { id: '5', name: 'P5' },
  { id: '6', name: 'P6' }
];

const formasiData = {
  '4-2': ['P1', 'P2', 'P3', 'P4', 'P5', 'P6'],
  '6-2': ['P3', 'P1', 'P5', 'P6', 'P2', 'P4'],
  '5-1': ['P2', 'P6', 'P1', 'P4', 'P3', 'P5']
};

const SimulasiStrategi = () => {
  const [formasi, setFormasi] = useState('4-2');
  const [positions, setPositions] = useState(initialPlayers);

  // Load dari localStorage saat halaman dibuka
  useEffect(() => {
    const saved = localStorage.getItem('positions');
    if (saved) {
      setPositions(JSON.parse(saved));
    } else {
      applyFormasi('4-2');
    }
  }, []);

  // Simpan ke localStorage setiap kali posisi berubah
  useEffect(() => {
    localStorage.setItem('positions', JSON.stringify(positions));
  }, [positions]);

  const handleFormasiChange = (e) => {
    const selected = e.target.value;
    setFormasi(selected);
    applyFormasi(selected);
  };

  const applyFormasi = (type) => {
    const urutan = formasiData[type];
    const newPos = urutan.map(nama => initialPlayers.find(p => p.name === nama));
    setPositions(newPos);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newPositions = Array.from(positions);
    const [moved] = newPositions.splice(result.source.index, 1);
    newPositions.splice(result.destination.index, 0, moved);

    setPositions(newPositions);
  };

  return (
    <div style={styles.container}>
  <h2>Simulasi Strategi Bola Voli 🏐</h2>
  <p>Atur pemain berdasarkan formasi dan posisikan mereka di lapangan.</p>

  <div style={styles.controls}>
    <label htmlFor="formasi">Pilih Formasi: </label>
    <select id="formasi" value={formasi} onChange={handleFormasiChange}>
      <option value="4-2">4 - 2</option>
      <option value="6-2">6 - 2</option>
      <option value="5-1">5 - 1</option>
    </select>
    <button onClick={() => applyFormasi(formasi)} style={styles.resetBtn}>Reset</button>
  </div>

  {/* Lapangan */}
  <div style={styles.court}>
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="court" direction="horizontal">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={styles.grid}
          >
            {positions.map((player, idx) => (
              <Draggable key={player.id} draggableId={player.id} index={idx}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...styles.player,
                      ...provided.draggableProps.style
                    }}
                  >
                    {player.name}
                  </div>
                )}
              </Draggable>
            ))}
            <div style={styles.net}></div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  </div>
</div>
  )
};

const styles = {
  container: {
    padding: '30px 20px',
    fontFamily: 'Poppins, sans-serif',
    textAlign: 'center'
  },
  controls: {
    marginBottom: '20px',
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    alignItems: 'center'
  },
  resetBtn: {
    backgroundColor: '#0077cc',
    color: '#fff',
    padding: '6px 12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  court: {
    display: 'flex',              // ✅ Flex buat center isi grid
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
    aspectRatio: '3 / 2',         // Ukuran seperti lapangan bola voli
    backgroundColor: '#e6f7ff',
    border: '4px solid #0077cc',
    borderRadius: '12px',
    margin: '0 auto'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',   // 3 kolom
    gridTemplateRows: 'repeat(2, 1fr)',      // 2 baris
    gap: '20px'
  },
  player: {
    width: '120px',
    height: '120px',
    backgroundColor: '#0077cc',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'grab',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    fontSize: '18px'
  },
    net: {
    gridColumn: '1 / span 3',
    height: '6px',
    backgroundColor: '#444',
    margin: '10px 0',
    borderRadius: '3px'
  }
};


export default SimulasiStrategi;
