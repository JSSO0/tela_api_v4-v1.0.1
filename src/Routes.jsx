import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from 'pages/Home'
import NotFound from 'pages/NotFound'
const Buscarusurio = React.lazy(() => import('pages/Buscarusurio'))
const Buscarusurios = React.lazy(() => import('pages/Buscarusurios'))
const Ediodeusurio = React.lazy(() => import('pages/Ediodeusurio'))
const Criaadeusurio = React.lazy(() => import('pages/Criaadeusurio'))
const MenuInicial = React.lazy(() => import('pages/MenuInicial'))
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MenuInicial />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/criaadeusurio" element={<Criaadeusurio />} />
          <Route path="/ediodeusurio" element={<Ediodeusurio />} />
          <Route path="/buscarusurios" element={<Buscarusurios />} />
          <Route path="/buscarusurio" element={<Buscarusurio />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  )
}
export default ProjectRoutes
