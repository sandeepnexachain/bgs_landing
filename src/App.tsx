import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Resource from "./pages/Resource"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resource" element={<Resource />} />
      </Routes>
    </BrowserRouter>
  )
}
