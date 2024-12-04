import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // Cargar los datos guardados en localStorage cuando el componente se monta
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name.trim().length < 3) {
      setError(true);
      setMessage("El nombre debe contener al menos 3 caracteres");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError(true);
      setMessage("Por favor ingrese un email válido");
      return;
    }

    setError(false);
    setMessage(`Gracias ${formData.name}, te contactaremos cuanto antes via mail`);
    
    localStorage.setItem("userData", JSON.stringify(formData));
    
    console.log("Datos enviados por el usuario:", formData);
    onSubmit(formData);

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
        <button type="reset">Limpiar</button>
      </form>
      {message && (
        <h2>
          {message}
        </h2>
      )}
      
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default Form;
