import { Routes, Route } from 'react-router-dom';
import { Navbar, Home, About, NotFound, ShowCardDetails } from './components';
import Styles from './App.module.scss';

const App = () => (
    <div>
        <Navbar />
        <div className={Styles.main}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/show/:id" element={<ShowCardDetails />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </div>
);

export default App;
