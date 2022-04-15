import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Navbar, Home, About, NotFound, ShowCardDetails } from './components';
import Styles from './App.module.scss';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
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
        <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
);

export default App;
