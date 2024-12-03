import React, {useContext} from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useContext (ContextGlobal);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid`}>
        {state.favorites.lenght === 0 ?(
          <p>No tienes favoritos</p>
        ): (
          state.favorites.map((fav) => (
            <Card key={fav.id} 
              name={fav.name}
              username={fav.username}
              id={fav.id}
           />
          ))
        )}
      </div>
    </>
  );
};

export default Favs;
