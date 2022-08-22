
import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className="App">
      <nav id='nav.bar'>
        <h2>
          <Link to="/">MoviesLib</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">search</Link>
      </nav>
      <h2>MoviesLib</h2>
      <Outlet />
    </div>
  )
}

export default App
