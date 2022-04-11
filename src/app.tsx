import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import { HomePage } from '~pages/home'
import { CharactersPage } from '~pages/characters'

import { ROUTES } from '~constants/routes'

import './app.scss'

export function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path={ROUTES.HOME}
            element={<HomePage />}
          />
          <Route
            path={ROUTES.CHARACTERS}
            element={<CharactersPage />}
          />
        </Routes>
      </div>
    </Router>
  )
}
