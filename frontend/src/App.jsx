import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout'
import Inicio from './pages/Inicio'
import EnConTruccion from './components/ui/EnContruccion'

export default function App() {
  return (
    <Routes>
      {/* Layout envuelve a todas las paginas (Header + página + footer) */}
      <Route element={<Layout/>}>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<EnConTruccion />} />
      </Route>
    </Routes>
  )
}