import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "" }); 
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 3 || formData.name[0]===" ") {
      setError(true);
      setMessage("El nombre debe contener al menos 3 caracteres y no puede iniciar con espacio.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError(true);
      setMessage("Por favor ingrese un email válido");
      return;
    }

    setError(false);
    setMessage(`Gracias ${formData.name}, te contactaremos cuanto antes via mail`);
    setFormData({ name: "", email: "" }); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {message && (
        <h2>
          {message}
        </h2>
      )}
    </div>
  );
};

export default Form;
