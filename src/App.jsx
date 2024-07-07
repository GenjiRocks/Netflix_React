import { Route, Routes } from 'react-router-dom'
import BreakLine from './components/BreakLine'
import FAQ from './components/FAQ'
import Fifthsection from './components/Fifthsection'
import Footer from './components/Footer'
import Fourthsection from './components/Fourthsection'
import Head from './components/Head'
import Secondsection from './components/Secondsection'
import Thirdsection from './components/Thirdsection'
import HomePage from './pages/HomePage'
import Signin from './pages/Signin'

function App() {
 
  return (
    <>
    {/* <Head/>
    <BreakLine/>
    <Secondsection/>
    <BreakLine/>
    <Thirdsection/>
    <BreakLine/>
    <Fourthsection/>
    <BreakLine/>
    <Fifthsection/>
    <BreakLine/>
    <FAQ/>
    <BreakLine/>
    <Footer/> */}
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
    </Routes>
    
    
    </>
  )
}

export default App
