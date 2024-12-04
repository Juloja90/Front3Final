import { useEffect, useState } from 'react'
import React from 'react'
import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const formattedDentists = data.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
        }));

        setDentists(formattedDentists);
      })
      .catch((error) => console.error("Error trayendo dentistas:", error));
  }, []);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.map((dentist)=>(
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home