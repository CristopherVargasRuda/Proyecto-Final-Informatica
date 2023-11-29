import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.css';
import Home from './pages/Home';
import EditPage from "./pages/EditPage";
import CreatePage from "./pages/CreatePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/editar' element={<EditPage />} />
        <Route path='/crear' element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
