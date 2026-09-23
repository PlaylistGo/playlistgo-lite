import { useState } from "react";
import "../css/react/App.css";
import { useCSV } from "../tools/hooks/useCSV";
import { type Song } from "../tools/types/interface";

function toEmbedYTUrl(url: string) {
  const u = new URL(url);
  const id = u.hostname.includes("youtu.be")
    ? u.pathname.slice(1)
    : u.searchParams.get("v");

  return id ? `https://www.youtube.com/embed/${id}` : url;
}

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
            <iframe src={toEmbedYTUrl(song.url)} title={song.title}></iframe>
          )}
        </li>
      ))}
    </ul>
  );
}

export default App;
