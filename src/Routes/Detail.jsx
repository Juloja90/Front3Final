import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';  // Importar useParams para acceder al id de la URL

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { id } = useParams();  // Obtén el id desde la URL
  const [user, setUser] = useState(null);  // Estado para almacenar la información del usuario

  // Usamos useEffect para hacer el fetch cuando el componente se monta
  useEffect(() => {
    // Hacer el fetch para obtener los datos del usuario según el id
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();
        setUser(data);  // Guardar la información del usuario en el estado
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUser();  // Llamada a la función fetch
  }, [id]);  // Dependemos del id, si cambia, vuelve a hacer el fetch

  // Si el usuario no está cargado, muestra un mensaje de carga
  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1>Detail Dentist: {user.name}</h1>
      <table className="user-details">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td>Website</td>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td><a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
        </tr>
      </table>
    </>
  );
};

export default Detail;
