import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Containtpage from "./Containtpage";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./Navbar";
import Profilepage from "./pages/Profilepage";
import Settingspage from "./pages/Settingspage";
import Products from "./pages/Products";
import { createContext, useState } from "react";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";

  // learning about the Context
  // stape 1) -- creating the context.
  export const userContext = createContext();
function App() {
  const [user,setUser] = useState("guest");
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
      {/* stap 2) -- provide the context into this component using the userContext.Provider */}
      <input type="text" value={user} onChange={(e)=>setUser(e.target.value)} />
      <userContext.Provider value={{user,setUser}}>
        <Login />
      <Checkout />
      </userContext.Provider>
    </div>
  )
}

export default App
