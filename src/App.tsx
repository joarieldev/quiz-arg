import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <main className="flex justify-center bg-sky-950">
        <div className="max-w-screen-lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  )
}

export default App
