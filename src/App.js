import Navbar from "./components/Navbar";
import Summarize from "./components/Summarize";
import Inicio from "./components/Inicio";
import Insertion from "./components/Insertion";
import Completition from "./components/Completition";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Grammar from "./components/Grammar";


function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/summarize" Component={Summarize}></Route>
        <Route path="/" Component={Inicio}></Route>
        <Route path="/insertion" Component={Insertion}></Route>
        <Route path="/completition" Component={Completition}></Route>
        <Route path="/grammar" Component={Grammar}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
