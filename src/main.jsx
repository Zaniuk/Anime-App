import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/pico.min.css'
import AnimeSection from './components/Anime/AnimeSection'
import './index.css'
import Home from './routes/Home'
import NotFound from './routes/NotFound'
import Search from './routes/Search'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={<Home />} />
      <Route path='/search' element={<Search />} />
      <Route path='/anime/:id' element={<AnimeSection/>} />
    </Routes>
  </BrowserRouter>
)
