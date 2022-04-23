import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    Navbar,
    Home,
    About,
    NotFound,
    ShowCardDetails,
    ErrorBoundary,
} from './components';
import Styles from './App.module.scss';

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
            <Navbar />
            <div className={Styles.main}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/show/:id" element={<ShowCardDetails />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </ErrorBoundary>
        <ReactQueryDevtools position="bottom-right" />
    </QueryClientProvider>
);

export default App;
