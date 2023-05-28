import './App.css';
import SearchResults from './components/SearchResults';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <div className="main-container">
          <SearchResults />
          <SearchResults />
        </div>
      </main>
      <footer>
        <p>Copyright Jammming</p>
      </footer>
    </div>
  );
}

export default App;
