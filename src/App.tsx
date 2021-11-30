import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from './pages/home';
import { Roadmap } from './pages/roadmap';
import { Team } from './pages/team';
import { Townhall } from './pages/townhall';
import { Faq } from './pages/faq';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/townhall" element={<Townhall/>}></Route>
        <Route path="/roadmap" element={<Roadmap/>}></Route>
        <Route path="/team" element={<Team/>}></Route>
        <Route path="/faq" element={<Faq/>}></Route>
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
