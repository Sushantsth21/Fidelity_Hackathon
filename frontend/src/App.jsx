import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Header from './components/Header'
<<<<<<< HEAD
import Footer from './components/Footer'
import Dashboard from './pages/Dashboard'
=======
import Dashboard from "./pages/Dashboard.jsx";
>>>>>>> 154d0aab82d11b0a3250cb6d8d847f4434d0c5db


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
