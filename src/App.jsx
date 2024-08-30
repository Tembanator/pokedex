import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Pokemon from "./pages/Pokemon"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/pokemon/:id"} element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
