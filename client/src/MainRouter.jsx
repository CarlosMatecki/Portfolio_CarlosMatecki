import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Education from './pages/Education'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

const MainRouter = () =>{
    return (
    <div>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/dashboard" element={(<ProtectedRoute roles={["admin"]}><Dashboard /></ProtectedRoute>)} />
        </Routes>
    </div>
    );
} 
export default MainRouter
