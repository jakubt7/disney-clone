import './App.css'
import Featured from './components/Featured'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import GenreMovies from './components/GenreMovies'

export default function App() {
  return (
    <div className="">
    <Navbar />
    <Slider />
    <Featured />
    <GenreMovies />
    </div>
  )
}

