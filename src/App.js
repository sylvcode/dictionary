import './App.css'
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="Sunshine" />
        </main>
      </div>
      <footer>Coded by Sylvia</footer>
    </div>
  )
}

export default App
