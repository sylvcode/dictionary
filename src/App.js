import './App.css'
import Dictionary from './Dictionary'
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>

        <main>
          <Dictionary defaultKeyword="Sunshine" />
        </main>
      </div>
      <footer>Coded by Sylvia</footer>
    </div>
  )
}

export default App
