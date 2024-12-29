import React, { useState, useEffect } from 'react';

const drumSounds = [
  { key: 'Q', id: 'Heater-1', src: '/sounds/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', src: '/sounds/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', src: '/sounds/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', src: '/sounds/Heater-4.mp3' },
  { key: 'S', id: 'Clap', src: '/sounds/Clap.mp3' },
  { key: 'D', id: 'Open-HH', src: '/sounds/Open-HH.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', src: '/sounds/Kick-n-Hat.mp3' },
  { key: 'X', id: 'Kick', src: '/sounds/Kick.mp3' },
  { key: 'C', id: 'Closed-HH', src: '/sounds/Closed-HH.mp3' }
];

function DrumMachine() {
  const [display, setDisplay] = useState('');

  useEffect(() => {
    const handleKeyPress = (e) => {
      const drumPad = drumSounds.find(
        (sound) => sound.key === e.key.toUpperCase()
      );
      if (drumPad) {
        playSound(drumPad);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const playSound = (drumPad) => {
    const audio = document.getElementById(drumPad.key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(drumPad.id);
  };

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {drumSounds.map((drumPad) => (
          <div
            key={drumPad.key}
            className="drum-pad"
            id={drumPad.id}
            onClick={() => playSound(drumPad)}
          >
            {drumPad.key}
            <audio
              className="clip"
              id={drumPad.key}
              src={drumPad.src}
            ></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DrumMachine;