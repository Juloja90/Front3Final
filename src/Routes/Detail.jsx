import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
  const { id } = useParams(); 
  const [user, setUser] = useState(null); 


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await response.json();

        const userDetails = {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        };

        localStorage.setItem("dentistDetail", JSON.stringify(userDetails));
        console.log(userDetails);

        setUser(data);  
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchUser();
  }, [id]);



  if (!user) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <h1>Detail Dentist: {user.name}</h1>
      <table className="user-details">
      <tbody>
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
        </tbody>
      </table>
    </>
  );
};

export default Detail;
