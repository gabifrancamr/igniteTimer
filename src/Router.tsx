import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/igniteTimer" element={<DefaultLayout />}>
        <Route path="/igniteTimer" element={<Home />} />
        <Route path="/igniteTimer/history" element={<History />} />
      </Route>
    </Routes>
  )
}
