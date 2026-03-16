import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Movie from "./pages/Movie"

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movie" element={<Movie />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
