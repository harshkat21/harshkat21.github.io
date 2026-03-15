:root {
  --tape: linear-gradient(135deg, #2a2a2a, #1a1a1a);
  --ink: #ffffff;
  --accent: #cccccc;
  --secondary: #888888;
  --bg: linear-gradient(135deg, #0a0a0a, #1a1a1a);
  --glow: 0 0 20px rgba(200, 200, 200, 0.3);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--ink);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

.container {
  max-width: 800px;
  width: 100%;
  padding: 2rem;
  position: relative;
}

.welcome {
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.welcome h1 {
  font-family: 'VT323', monospace;
  font-size: 4rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--accent), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--glow);
  animation: textGlow 2s ease-in-out infinite alternate;
}

@keyframes textGlow {
  from { filter: brightness(1); }
  to { filter: brightness(1.2); }
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.tracklist {
  list-style: none;
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tracklist li {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.tracklist li::after {
  content: "ℹ️";
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0.5;
  font-size: 0.8rem;
  transition: opacity 0.3s ease;
}

.tracklist li:hover::after {
  opacity: 1;
}

.tracklist li i {
  margin-right: 1rem;
  color: var(--accent);
}

.duration {
  color: var(--secondary);
  font-size: 0.9rem;
  opacity: 0.8;
}

.tracklist li::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.tracklist li:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(200, 200, 200, 0.2);
  border-color: var(--accent);
}

.tracklist li:hover::before {
  left: 100%;
}

.player {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  opacity: 0;
  transform: scale(0.8) translateY(50px);
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  margin-top: 2rem;
}

.player::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(200, 200, 200, 0.1), transparent);
  animation: rotate 4s linear infinite;
  pointer-events: none;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.player.active {
  opacity: 1;
  transform: scale(1) translateY(0);
}

.cassette {
  background: var(--tape);
  color: var(--ink);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: inset 0 0 0 4px #000, 0 20px 40px rgba(0,0,0,0.6);
  position: relative;
  overflow: hidden;
}

.cassette::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  pointer-events: none;
}

.label {
  text-align: center;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--accent);
  text-shadow: 0 0 10px rgba(200, 200, 200, 0.5);
}

.reels {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.reel {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 6px solid #333;
  position: relative;
  background: radial-gradient(circle, #666, #333);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
}

.reel::after {
  content: '';
  position: absolute;
  inset: 18px;
  border-radius: 50%;
  border: 4px solid #333;
  background: radial-gradient(circle, #555, #222);
}

.spinning {
  animation: spin 1.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.controls button {
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(135deg, #333, #555);
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.controls button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.controls button:hover {
  background: linear-gradient(135deg, var(--accent), var(--secondary));
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(200, 200, 200, 0.3);
}

.controls button:hover::before {
  left: 100%;
}

.progress-wrap {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1rem;
  color: var(--secondary);
  font-weight: 500;
}

.volume-wrap {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: 1rem;
  color: var(--secondary);
  font-weight: 500;
}

.volume-wrap i {
  font-size: 1rem;
}

#volume {
  flex: 1;
  -webkit-appearance: none;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  outline: none;
  transition: background 0.3s ease;
}

#volume::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(136, 136, 136, 0.6);
  transition: all 0.3s ease;
}

#volume::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 12px rgba(136, 136, 136, 0.8);
}

#volume::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: var(--secondary);
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 0 8px rgba(136, 136, 136, 0.6);
}

#progress {
  flex: 1;
  -webkit-appearance: none;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  outline: none;
  transition: background 0.3s ease;
}

#progress::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--accent);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(200, 200, 200, 0.6);
  transition: all 0.3s ease;
}

#progress::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(200, 200, 200, 0.8);
}

.lyrics-container {
  margin-top: 1rem;
  text-align: center;
}

#lyricsBtn {
  background: linear-gradient(135deg, #333, #555);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
}

#lyricsBtn:hover {
  background: linear-gradient(135deg, var(--accent), var(--secondary));
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(200, 200, 200, 0.3);
}

.lyrics-display {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
  text-align: left;
}

#lyricsText {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.4;
  color: var(--secondary);
  margin: 0;
  white-space: pre-line;
  min-height: 100px;
}

#lyricsText:empty::before {
  content: "Loading lyrics...";
  color: var(--accent);
  font-style: italic;
}

@media (max-width: 768px) {
  .welcome h1 {
    font-size: 3rem;
  }
  
  .container {
    padding: 1rem;
  }
  
  .player {
    padding: 2rem;
  }
  
  .cassette {
    padding: 1.5rem;
  }
}
