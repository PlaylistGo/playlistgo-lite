import "../css/react/App.css";
import { useCSV } from "../tools/hooks/useCSV";

function App() {
  const songs = useCSV();
  return (
    <>
      {songs.map((song) => (
        <div key={song.id}>
          <div>{song.title}</div>
          <a href={song.url}>{song.url}</a>
        </div>
      ))}
    </>
  );
}

export default App;
