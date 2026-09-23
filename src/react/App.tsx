import { useState } from "react";
import "../css/react/App.css";
import { useCSV } from "../tools/hooks/useCSV";
import { type Song } from "../tools/types/interface";
import { useURL } from "../tools/hooks/useURL";

function App() {
  const songs = useCSV();
  const [activeSong, setActiveSong] = useState<Song | null>(null);

  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          <div onClick={() => setActiveSong(song)}>
            {song.title} (Song ID: {song.id})
          </div>
          {activeSong?.id === song.id && (
            <iframe src={useURL(song.url)} title={song.title}></iframe>
          )}
        </li>
      ))}
    </ul>
  );
}

export default App;
