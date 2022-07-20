import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Create from './Pages/Create'
import About from './Pages/About'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Home from './Pages/Home'
import AnecdoteDetail from './Pages/Anecdote'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])
  
  
  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes([...anecdotes, anecdote])
  
  }
  
  return (
    <div className="App-header">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home anecdotes={anecdotes}/>}/>
          <Route path='/create' element={<Create addNew={addNew}/>}/>
          <Route path='/about' element={<About />}/>
          <Route path='anecdote/:id' element= {<AnecdoteDetail anecdotes={anecdotes}/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
