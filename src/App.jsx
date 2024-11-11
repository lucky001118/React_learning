import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Containtpage from "./Containtpage";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./Navbar";
import Profilepage from "./pages/Profilepage";
import Settingspage from "./pages/Settingspage";
import Products from "./pages/Products";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />}> 
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/settings" element={<Settingspage />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contains" element={<Containtpage />} />
        <Route path="*" element={<PageNotFound />}/>
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
