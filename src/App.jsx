import { Routes, Route } from 'react-router-dom';


import AllPageVideo from './pages/AllPageVideo';
import VideoPage from './pages/VideoPage';
import Layout from './layout';


import './App.css'


function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AllPageVideo />} />
          <Route path="/video/:id" element={<VideoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
