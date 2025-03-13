import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ThemeToggle from "./ui/icons/ThemeToggle";
import CartIcon from "./ui/icons/CartIcon";
import UserIcon from "./ui/icons/UserIcon";

function Navbar({userLogged ,setUserLogged}) {
 
  const [dropdown,setDropDown]=useState(false)
  const logout=()=>{
    if(userLogged){
      setUserLogged(false)
    }
  }

  const handleThemeToggle = () => {
    document.getElementsByTagName("html")[0].classList.toggle("dark");
  };

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            MusicShop
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/categories" className="hover:text-gray-200">
              Categories
            </Link>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-200">
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle onToggle={handleThemeToggle} />
            {userLogged ? (
              <>
                <Link to="/cart" className="hover:text-gray-200">
                  <CartIcon />
                </Link>
                <div className="hover:text-gray-200" onClick={()=>{setDropDown(x=>!x)}}>
                  <UserIcon  />

            

<div id="dropdown" class={`z-10 top-14 absolute  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 ${dropdown?'':'hidden'}`}>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <div onClick={()=>{logout()}} class="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">LogOut</div>
      </li>
    </ul>
</div>

                </div>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-200">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
