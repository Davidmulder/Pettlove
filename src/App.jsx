
import { PetsNamorando } from './page/petnamorado'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { ComoFunciona } from "./page/comofunciona";

// Estou colocando a pagina Petsnamorando com principal
function App() { 

  return (
   <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PetsNamorando />} />
          <Route path="/como-funciona" element={<ComoFunciona />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
