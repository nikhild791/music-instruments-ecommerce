import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Category from "./pages/Category";

function App() {
    
  useEffect(()=>{
    //@ theme code
    const systemDarkTheme =   window.matchMedia("(prefers-color-scheme: dark)").matches
    const systemLightTheme =   window.matchMedia("(prefers-color-scheme: light)").matches;
    const systemNoTheme =   window.matchMedia("(prefers-color-scheme: no-preference)").matches;
    
    if(systemDarkTheme){
      console.log("Dark theme is detected")
       document.documentElement.classList.toggle("dark", true)
      }
    if(systemLightTheme){
      console.log("Light theme is detected")
       document.documentElement.classList.toggle("dark", false)
      }
    if(systemNoTheme){
     document.documentElement.classList.toggle("dark", false)
    }
  },[])

  
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      if (matches) {
        console.log("change to dark mode!");
        document.documentElement.classList.toggle("dark", true)
      } else {
        console.log("change to light mode!");
        document.documentElement.classList.toggle("dark", false)
      }
    });

    //@login setup
    const [userLogged, setUserLogged] = useState(localStorage.getItem('user')?true:false)


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar  userLogged={userLogged} setUserLogged={setUserLogged} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} setUserLogged={setUserLogged} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
