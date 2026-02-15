import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import AnalyzePage from './pages/AnalyzePage';
import ResultsPage from './pages/ResultsPage';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-[#f8fafd]">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/analyze" element={<AnalyzePage />} />
                        <Route path="/results" element={<ResultsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
