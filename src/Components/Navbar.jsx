import React, {useContext} from 'react'
import { ContextGlobal } from './utils/global.context';

const Navbar = () => {
  const {state, dispatch}=useContext(ContextGlobal);

  const toggleTheme = () =>{
    const newTheme = state.theme==="light"?"dark":"light";
    dispatch({type: "SET_THEME", payload: newTheme});
  }

  return (
    <nav>
      <a href="/Home">Home</a>
      <a href="/Favs">Favorites</a>
      <a href="/contact">Contact</a>
      <button title={`cambio de tema a ${state.theme === "light" ? "Oscuro":"Claro"}`} onClick={toggleTheme}><img img src={`/DH.ico`} alt='DH-ico' id="DHico" ></img></button>
    </nav>
  );
};

export default Navbar;