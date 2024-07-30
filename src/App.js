import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import Hompage from './components/Hompage'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Hompage />} />
      </Routes>
    </div>
  )
}

export default App
