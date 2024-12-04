import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id }) => {
  console.log(`detalle del dentista ${name}`,{ name, username, id });
  const { state, dispatch } = useContext(ContextGlobal);

  const isFavorite = state.favorites.some((fav) => fav.id === id);

  const handleFavoriteClick = () => {
    const dentist = { name, username, id };

    localStorage.setItem("dentistData", JSON.stringify(dentist));

    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: dentist });
    }
  };

  return (
    <div className="card">
      <img src={`/images/doctor.jpg`} alt="Dentist" />
      <Link to={`/dentist/${id}`} className="card-link">
      <h3>{name}</h3>
      </Link>
      <p>{username}</p>
      <button
        onClick={handleFavoriteClick}
        className={`favButton ${isFavorite ? "fabAdded" : ""}`}
      >
        <img
          src="/favicon.ico"
          alt="favIcon"
          style={{ width: "20px", height: "20px", marginRight: "8px" }}
        />
      </button>
    </div>
  );
};

export default Card;
