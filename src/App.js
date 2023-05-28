import './App.css';
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';

function App() {

  const searchData = [
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Kanye West", song: "The Good Life" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Bob Saget", song: "Dropout" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Tim Dragnuts", song: "Through the Wire" },
    {src: "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", artist: "Yo Dawg", song: "Diggity" }
  ];

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <SearchBar />
        <div className="main-container">
          <SearchResults data={searchData}/>
          <Playlist />
        </div>
      </main>
      <footer>
        <p>Copyright Jammming</p>
      </footer>
    </div>
  );
}

export default App;
