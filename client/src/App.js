import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import RegistrationForm from './components/Registration';
import LoginForm from './components/Login';
import MyProfile from './components/MyProfile';
import FeedbackForm from './components/Feedback';
import WriteBlog from './components/WriteBlog.js';
import ReadBlog from './components/ReadBlog.js';
import CulturalPage from './components/Cultural.js';
import VacationPage from './components/Vacations';
import Wildlife from './components/Wildlife';
import BeachPage from './components/Beach';
import IncredibleIndia from './components/IncredibleIndia';
import Tajmahal from './components/Tajmahal';
import Kerala from './components/Kerala';
import DurgaPuja from './components/DurgaPuja';
import Kashmir from './components/Kashmir';
import TourismPage from './components/Dream_tour';

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} className="home-page" />
          <Route path="/About" element={<About />} className="about-page" />
          <Route path="/Dream_tour" element={<TourismPage/>} className="Tourismpage" />
          <Route path="/Registration" element={<RegistrationForm />} className="RegistrationForm" />
          <Route path="/login" element={<LoginForm />} className="LoginForm" />
          <Route path="/profile" element={<MyProfile />} className="MyProfile" />
          <Route path="/Feedback" element={<FeedbackForm />} className="FeedbackForm" />
          <Route path="/blog" element={<ReadBlog/>} className="ReadBlog" /> 
          <Route path="/uploadblog" element={<WriteBlog/>} className="WriteBlog" /> 
          <Route path="/Cultural.js" element={<CulturalPage/>} className="Cultural" /> 
          <Route path="/Vacations.js" element={<VacationPage/>} className="Vacation" /> 
          <Route path="/Wildlife" element={<Wildlife/>} className="Wildlife" /> 
          <Route path="/Beach.js" element={<BeachPage/>} className="Wildlife" />
          <Route path="/Incredible_India.js" element={<IncredibleIndia/>} className="Wildlife" />
          <Route path="/blog/tajmahal" element={<Tajmahal/>} className="tajmahal" />
          <Route path="/blog/kerala" element={<Kerala/>} className="tajmahal" />
          <Route path="/blog/durgapuja" element={<DurgaPuja/>} className="tajmahal" />
          <Route path="/blog/kashmir" element={<Kashmir/>} className="tajmahal" />
        </Routes>
    </>
  );
};

export default App;
