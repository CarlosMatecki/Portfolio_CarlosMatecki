import {Routes, Route, Link, Router, BrowserRouter} from 'react-router-dom'

import './App.css'

import MainRouter from './MainRouter'

const App = () =>{
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App

