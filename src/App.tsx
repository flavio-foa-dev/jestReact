import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Home from './pages/Home/Home'
function App() {

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
