import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import ProtectedRoutes from './Services/ProtectedRoutes.jsx'
import Exam from './Components/Exam/Exam'
import Login from './Components/Login/Login'
import Third from './Components/Third/Third'
import Page4 from './Components/Page4/Page4'
import Header from './Components/Header/Header'
import Table from './Components/Table/Table'
import Instructions from './Components/Instructions/Instructions'
import Page5 from './Components/Page5/Page5'
import Page6 from './Components/Page6/Page6'
import Page7 from './Components/Page7/Page7.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route element={<ProtectedRoutes />} >
            <Route path='/exam' element={<Exam />} />
            <Route path='/third' element={<Third />} />
            <Route path='/page4' element={<Page4 />} />
            <Route path='/page5' element={<Page5 />} />
            <Route path='/page6' element={<Page6 />} />
            <Route path='/page7' element={<Page7 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
