import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout/Layout';
import Playlists from './Playlists/Playlists';
import Tracks from './Tracks/Tracks';
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/playlists" element={<Playlists></Playlists>}></Route>
          <Route path="/tracks" element={<Tracks></Tracks>}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
