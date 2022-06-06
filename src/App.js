import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Hotel from './pages/Hotel';
import Flights from './pages/Flights';
import Packages from './pages/Packages';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="hotels" element={<Hotels />}>
            <Route path=":Id" element={<Hotel />} />
          </Route>
          <Route path="flights" element={<Flights />} />
          <Route path="packages" element={<Packages />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
