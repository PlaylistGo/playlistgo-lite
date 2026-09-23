// we iframe the youtube video songs in here
import { useState } from "react";
import { useCSV } from "../hooks/useCSV";
import { type Song } from "../types/interface";
import { useURL } from "../hooks/useURL";

export function FrameYouTube() {
  const songs = useCSV();
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  return (
    <>
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
    </>
  );
}
