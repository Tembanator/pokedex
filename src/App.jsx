import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Pokemon from "./pages/Pokemon"
import { useState } from "react"

function App() {

  const [offSet, setOffSet] = useState(0)
  const [limit, setLimit] = useState(30)

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/pokemon/:id"} element={<Pokemon offSet={offSet} limit={limit} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
