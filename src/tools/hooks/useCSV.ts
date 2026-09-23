import { useEffect, useState } from "react";
import { type Song } from "../types/interface";

export function useCSV() {
  const [songs, setSongs] = useState<Song[]>([]);

  useEffect(() => {
    fetch("/songs/songs.csv")
      .then((res) => res.text())
      .then((text) => {
        const [, ...lines] = text.trim().split("\n");

        setSongs(
          lines.map((line, index) => {
            const [title, url] = line.split(",");
            return {
              id: index,
              title: title || "Untitled",
              url: url || "",
            };
          })
        );
      })
      .catch((error) => console.error("[CSV] Failed:", error));
  }, []);
  
  return songs;
}