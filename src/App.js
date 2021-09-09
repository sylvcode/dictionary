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
          <Dictionary />
        </main>
      </div>
      <footer>
        Open source code on 
       <a href="https://github.com/sylvcode/dictionary">Github</a>. Coded with 💜 by <span>Sylvia</span> & hosted on
        Netlify
      </footer>
    </div>
  )
}

export default App
