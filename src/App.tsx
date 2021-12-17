import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./theme/theme";
import { Layout } from "./components/layout";
import { Home } from './pages/home';
import { Roadmap } from './pages/roadmap';
import { Team } from './pages/team';
import { Townhall } from './pages/townhall';
import { Faq } from './pages/faq';
import { useEagerConnect } from "./connectors/use-eager-connect";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider: any) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}


function App() {
  useEagerConnect();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Web3ReactProvider getLibrary={getLibrary}>
        <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/townhall" element={<Townhall/>}></Route>
          <Route path="/roadmap" element={<Roadmap/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/faq" element={<Faq/>}></Route>
        </Routes>
        </Layout>
        </Web3ReactProvider>
        </ThemeProvider>
    </Router>
  );
}

export default App;
