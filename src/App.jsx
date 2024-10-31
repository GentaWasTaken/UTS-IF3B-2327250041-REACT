
import React, { Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route , NavLink} from 'react-router-dom'

const ListPage = React.lazy( ()=> import('./components/Attendance/List'))
const CreatePage = React.lazy( ()=> import('./components/Attendance/Create'))
const HomePage = React.lazy( ()=> import('./components/Home'))

function App() {
  return (
<>
      <Router>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink className={({isActive}) => `nav-link ${isActive ? "active" : ""}`} to={"/attendance"} aria-current="page">Attendance</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className={({isActive}) => `nav-link ${isActive ? "active" : ""}`} to={"/"} aria-current="page">Home</NavLink>
                    </li>

                  </ul>
                </div>
              </div>
            </nav>
            
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/attendance" element={<ListPage />} />
                <Route exact path="/attendance/create" element={<CreatePage />} />
              </Routes>
            </Suspense>
    </Router>
  </>
  );
}

export default App
